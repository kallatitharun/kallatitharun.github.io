
def changeAds(num):
    bindata = format(num, "b")
    print(bindata)
    res=""
    for i in range(len(bindata)):
        if bindata[i]=="1":
            res+="0"
        elif bindata[i]=="0":
            res+="1"
    # res=int(res)
    print(res)
    print(int(res,2))
changeAds(50)