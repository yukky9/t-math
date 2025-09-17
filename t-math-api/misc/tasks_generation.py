from flask_restful import abort
import mathgenerator
import unicodedata
import random
import re

from data import db_session
from data.tasks import Task


def addition_generation(complexity):
    id_ = 0
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 99, 99)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 499, 499)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 999, 999)
    return {
        'problem': problem[1:-2],
        'solution': solution[1:-1].split('|')
    }


def subtraction_generation(complexity):
    id_ = 1
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 99, 99)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 499, 499)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 999, 999)
    return {
        'problem': problem[1:-2],
        'solution': solution[1:-1].split('|')
    }


def multiplication_generation(complexity):
    id_ = 2
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 19)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 49)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 99)
    problem = re.sub(r'\\cdot', '*', problem)
    return {
        'problem': problem[1:-1],
        'solution': solution[1:-1].split('|')
    }


def division_generation(complexity):
    id_ = 3
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 19)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 49)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 99)
    problem = re.sub(r'\\div', '/', problem)
    return {
        'problem': problem[1:-2],
        'solution': solution[1:-1].split('|')
    }


def root_generation(complexity):
    id_square, id_cube = 6, 47
    a, b = None, None
    a1, b1 = None, None
    problem, solution = None, None
    if complexity == 1:
        a, b = 1, 12
        a1, b1 = 1, 5
    if complexity == 2:
        a, b = 12, 22
        a1, b1 = 5, 10
    if complexity == 3:
        a, b = 22, 32
        a1, b1 = 10, 15
    n = random.randint(1, 3)
    if n == 1:
        problem, solution = mathgenerator.genById(id_square, a, b)
        problem = re.sub(r'{|}|\$|=|\\sqrt',
                         lambda match: {'{': '', '}': '', '$': '', '=': '', r'\sqrt': '√'}[match.group(0)], problem)
        solution = solution[1:-1]
    if n == 2:
        for_three = random.randint(a1, b1)
        problem, solution = f'∛{for_three ** 3}', f'{for_three}'
    if n == 3:
        for_four = random.randint(a1, b1)
        problem, solution = f'∜{for_four ** 4}', f'{for_four}'
    return {
        'problem': problem,
        'solution': solution.split('|')
    }


def power_generation(complexity):
    problem, solution = None, None
    if complexity == 1:
        id_ = 8
        problem, solution = mathgenerator.genById(id_, 20)
    if complexity == 2:
        id_ = 53
        problem, solution = mathgenerator.genById(id_, 10, 4)
        problem = problem[:-1]
    if complexity == 3:
        n = random.randint(1, 6)
        for_add1, for_add2 = random.randint(1, 3), random.randint(1, 3)
        for_sub1, for_sub2 = random.randint(1, 3), random.randint(1, 3)
        if for_sub1 < for_sub2:
            for_sub1, for_sub2 = for_sub2, for_sub1
        for_multi1, for_multi2 = random.randint(1, 3), random.randint(1, 3)
        possible = [
            (f'${n}^{for_add1}*{n}^{for_add2}=$', f'${n ** (for_add1 + for_add2)}$'),
            (f'${n}^{for_sub1}:{n}^{for_sub2}=$', f'${n ** (for_sub1 - for_sub2)}$'),
            (f'$({n}^{for_multi1})^{for_multi2}=$', f'${n ** (for_multi1 * for_multi2)}$')
        ]
        id_ = random.randint(0, 2)
        problem, solution = possible[id_][0], possible[id_][1]
    replacements = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹'
    }

    def replace_superscript(match):
        digit = match.group(1)
        return replacements[digit]

    problem = re.sub(r'\^(\d)', replace_superscript, problem)
    return {
        "problem": problem[1:-2],
        "solution": solution[1:-1].split('|')
    }


def fractional_to_decimal_generation(complexity):
    id_ = 13
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 39, 39)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 69, 69)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 99, 99)
    problem = re.sub(r'\\div', '/', problem)
    solution = solution[1:-1]
    if len(solution) == 3:
        solution = f'{solution}0|{solution}'
    return {
        'problem': problem[1:-2],
        'solution': solution.split('|')
    }


def factorial_generation(complexity):
    id_ = 31
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 5)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 7)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 9)
    return {
        'problem': problem[1:-3],
        'solution': solution[1:-1].split('|')
    }


def logarithm_generation(complexity):
    id_ = 12
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, 3, 6)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, 3, 8)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, 4, 10)
    problem = re.sub(r'_{(\d+)}',
                     lambda match: f'{chr(0x2080 + int(unicodedata.numeric(match.group(1))))}', problem)
    return {
        'problem': problem[1:-2],
        'solution': solution[1:-1].split('|')
    }


def trigonometric_values_generation(complexity):
    id_ = 57
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_, [30, 45, 60], ['sin', 'cos'])
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_, [0, 30, 45, 60, 90], ['sin', 'cos'])
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_, [0, 30, 45, 60, 90], ['sin', 'cos', 'tan'])
    solution = re.sub(r'{|}|\$|=|\\sqrt|\\infty',
                      lambda match: {'{': '', '}': '', '$': '', '=': '', r'\sqrt': '√', '\\infty': '∞'}[match.group(0)],
                      solution)
    solution = re.sub(r'\\frac12|\\frac1√3|\\frac1√2|\\frac√32',
                      lambda match: {'\\frac12': '1/2', '\\frac1√3': '√3/3', '\\frac1√2': '√2/2', '\\frac√32': '√3/2'}
                      [match.group(0)],
                      solution)
    return {
        'problem': problem[2:-4],
        'solution': solution.split('|')
    }


def linear_equation_generation(complexity):
    id_simple = 11
    problem, solution = None, None
    if complexity == 1:
        problem, solution = mathgenerator.genById(id_simple, 20)
    if complexity == 2:
        problem, solution = mathgenerator.genById(id_simple, 220)
    if complexity == 3:
        problem, solution = mathgenerator.genById(id_simple, 420)
    return {
        'problem': problem[1:-1],
        'solution': solution[1:-1].split('|')
    }


def quadratic_equation_generation(complexity):
    x1, x2 = None, None
    if complexity == 1:
        x1, x2 = random.randint(-10, 10), random.randint(-10, 10)
    if complexity == 2:
        x1, x2 = random.randint(-20, 20), random.randint(-20, 20)
    if complexity == 3:
        x1, x2 = random.randint(-30, 30), random.randint(-30, 30)
    p, q = (x1 + x2) * -1, x1 * x2
    p_to_pr, q_to_pr = f'+{abs(p)}' if p >= 0 else f'-{abs(p)}', f'+{abs(q)}' if q >= 0 else f'-{abs(q)}'
    problem, solution = f'$x^2{p_to_pr}x{q_to_pr}=0$', f'{x1}, {x2}|{x2}, {x1}'
    problem, solution = re.sub(r'([+=-])', r' \1 ', problem), re.sub(r'(=)', r' \1 ', solution)
    problem = re.sub(r'\^2', '²', problem)
    return {
        'problem': problem[1:-1],
        'solution': solution.split('|')
    }


def linear_inequality_generation(complexity):
    operators = ["<", ">", "<=", ">="]
    variable = "x"
    operator = random.choice(operators)
    coefficient1, coefficient2, constant = None, None, None
    if complexity == 1:
        coefficient1 = random.randint(1, 20)
        coefficient2 = random.randint(1, 20)
        constant = random.randint(1, 25)
        while (coefficient1 - coefficient2) == 0 or constant % (coefficient1 - coefficient2) != 0:
            coefficient1 = random.randint(1, 20)
            coefficient2 = random.randint(1, 20)
            constant = random.randint(1, 25)
    if complexity == 2:
        coefficient1 = random.randint(20, 120)
        coefficient2 = random.randint(20, 120)
        constant = random.randint(25, 125)
        while (coefficient1 - coefficient2) == 0 or constant % (coefficient1 - coefficient2) != 0:
            coefficient1 = random.randint(20, 120)
            coefficient2 = random.randint(20, 120)
            constant = random.randint(25, 125)
    if complexity == 3:
        coefficient1 = random.randint(120, 420)
        coefficient2 = random.randint(120, 420)
        constant = random.randint(125, 425)
        while (coefficient1 - coefficient2) == 0 or constant % (coefficient1 - coefficient2) != 0:
            coefficient1 = random.randint(120, 420)
            coefficient2 = random.randint(120, 420)
            constant = random.randint(125, 425)
    swap_sides = random.choice([True, False])
    if swap_sides:
        problem = f"{coefficient2}{variable} + {constant} {operator} {coefficient1}{variable}"
    else:
        problem = f"{coefficient1}{variable} {operator} {coefficient2}{variable} + {constant}"
    if coefficient1 == coefficient2:
        solution = "Все числа удовлетворяют неравенству" if constant > 0 else "Нет решений"
    else:
        solution = f"{variable} {operator} {constant // (coefficient1 - coefficient2)}"
    problem = re.sub(r"(>=)|(<=)", lambda match: "≥" if match.group(1) else "≤", problem)
    solution = re.sub(r"(>=)|(<=)", lambda match: "≥" if match.group(1) else "≤", solution)
    return {
        'problem': problem,
        'solution': solution.split('|')
    }


list_of_generated_tasks = [
    addition_generation, subtraction_generation, multiplication_generation, division_generation,
    root_generation, power_generation, fractional_to_decimal_generation, factorial_generation,
    logarithm_generation, trigonometric_values_generation, linear_equation_generation,
    quadratic_equation_generation, linear_inequality_generation
]


def mixed_generation(complexity, *selected_ids):
    global list_of_generated_tasks
    selected_ids = list(selected_ids)
    if len(selected_ids) == 0:
        abort(404, message=f"Tasks for mix [{len(selected_ids)}] are not found")
    chosen_list = []
    for task in range(1, len(list_of_generated_tasks) + 1):
        if task in selected_ids[0]:
            chosen_list.append(list_of_generated_tasks[task - 1])
            selected_ids[0].remove(task)
    random_expression = random.choice(chosen_list)

    added_task = None
    if len(selected_ids[0]) > 0:
        session = db_session.create_session()
        topic_tasks = list(session.query(Task.problem, Task.solution).filter(Task.topic_id.in_(selected_ids[0]),
                                                                             Task.complexity == complexity).all())
        if len(topic_tasks) == 0:
            abort(404, message=f"Tasks with topic_id [{selected_ids[0]}] and complexity [{complexity}] are not found")
        index = random.randint(0, len(topic_tasks) - 1)
        added_task = {
            'problem': topic_tasks[index][0],
            'solution': topic_tasks[index][1]
        }

    if added_task is not None:
        tmp = random.randint(0, 1)
        if tmp == 0:
            return random_expression(complexity), added_task
        else:
            return added_task
    else:
        return random_expression(complexity)
