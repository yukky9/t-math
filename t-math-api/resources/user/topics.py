from flask import g, request, send_from_directory
from flask_restful import Resource, abort

from keycloak_integration import authenticate
from misc import user_data_generation, list_of_generated_tasks
from data import db_session
from data.users import User
from data.topics import Topic


class TopicsResource(Resource):
    @staticmethod
    @authenticate
    def get():
        lang = request.args.get('lang', 'ru')
        session = db_session.create_session()
        user = session.query(User).filter(User.id == g.user_id).first()
        if not user:
            user = User(
                id=g.user_id,
                name=g.user_name
            )
            session.add(user)
            user_data_generation(session, g.user_id)
        res = []
        topics = session.query(Topic).all()
        if topics is None:
            abort(404, message="Topics not found")
        for topic in topics:
            res.append({
                'id': topic.id,
                'name': topic.name if lang == 'ru' else topic.eng_name,
                'placeholder': topic.placeholder if lang == 'ru' else topic.eng_placeholder
            })
        session.commit()
        return res, 200


class TopicPhotoResource(Resource):
    @staticmethod
    def get(topic_id):
        session = db_session.create_session()
        topic = session.query(Topic).filter(Topic.id == topic_id).first()
        session.commit()
        return send_from_directory('assets/topics', topic.photo)


class TopicDescriptionResource(Resource):
    @staticmethod
    @authenticate
    def get(topic_id):
        lang = request.args.get('lang', 'ru')
        session = db_session.create_session()
        topic = session.query(Topic).filter(Topic.id == topic_id).first()
        if topic is None:
            abort(404, message=f"Topic with id [{topic_id}] is not found")
        return {
            'description': topic.description if lang == 'ru' else topic.eng_description
        }, 200


class TopicsForMixResource(Resource):
    @staticmethod
    @authenticate
    def get():
        lang = request.args.get('lang', 'ru')
        session = db_session.create_session()
        topics = session.query(Topic).all()
        res = []
        for topic in topics:
            if topic.id != len(list_of_generated_tasks) + 1 and topic.id != len(list_of_generated_tasks) + 2:
                res.append({
                    'id': topic.id,
                    'name': topic.name if lang == 'ru' else topic.eng_name,
                })
        session.commit()
        return res, 200
