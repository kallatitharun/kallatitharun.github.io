
def solution(n):
    def digSum(x):
        temp = 0
        while (x != 0):
            temp = temp+ x % 10
            x = x // 10
        return temp
    flag=0
    var=n
    t=2*digSum(n)
    while 1:
        var+=1
        if digSum(var)==t:
            break
    return var
print(solution(500))