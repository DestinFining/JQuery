def is_valid_string(input_string):
    if len(input_string) < 2:
        return False, "错误：符号串长度必须大于等于2。"
    
    state = 'S0'
    for symbol in input_string:
        if state == 'S0':
            if symbol == '0':
                state = 'S1'
            elif symbol == '1':
                continue
            else:
                return False, "错误：符号串只能包含0和1。"
        elif state == 'S1':
            if symbol in ('0', '1'):
                state = 'S2'
            else:
                return False, "错误：符号串只能包含0和1。"
        elif state == 'S2':
            if symbol not in ('0', '1'):
                return False, "错误：符号串只能包含0和1。"
    
    if state in ('S1', 'S2'):
        return True, "合法的01符号串。"
    else:
        return False, "错误：符号串中至少需要包含一个0。"

# 示例测试
test_strings = ['1', '0', '10', '01', '110', '0011', '111', '00']
for test_string in test_strings:
    is_valid, message = is_valid_string(test_string)
    print(f"输入: {test_string} -> {message}")
