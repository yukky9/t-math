from flask import request
from functools import wraps

import consts


def admin_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            return {"message": "Authentication required"}, 401

        token = auth_header.split(" ")[1]

        try:
            token_info = consts.keycloak_openid.introspect(token)
            if not token_info.get("active"):
                return {"message": "Invalid token"}, 401
        except Exception as e:
            return {"message": f"Invalid token with error [{e}]"}, 401

        if token_info["realm_access"]["roles"][0] != "admin":
            return {"message": "Not admin"}, 401

        return func(*args, **kwargs)

    return wrapper
