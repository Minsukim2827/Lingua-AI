from collections import Counter


def price(goods):
    price = 0
    items =  {}
    for good in goods:
        if len(good) > 2:
            g, p, d = good
            n, _, dp = d.split()
            items[good[0]] = {    
                'p': good[1],
                'q': int(n),
                'dp': int(dp)
            }
        else:
            g, p = good
            items[good[0]] = {    
                'p': good[1],
                'q': None,
                'dp': None
            }
    counter = Counter(goods)
    for good, count in counter.items():
        if not items[good[0]]['q']:
            price += items[good[0]]['p'] * count
        else:
            div, rem = divmod(count, items[good[0]]['q'])
            price += div * items[good[0]]['dp']
            price += rem * items[good[0]]['p']
    return price

                      
# 50 + 30 + 20 + 15 = 115
goodslist = [("A",50,"3 for 130"),("B",30,"2 for 45"),("C",20),("D",15)]
# (130) + 50 + 30 + 20 + 15 = 
goodslist2 = [("A",50,"3 for 130"),("B",30,"2 for 45"),("A",50,"3 for 130"),("A",50,"3 for 130"),("A",50,"3 for 130"),("C",20),("D",15)]
print(price(goodslist))
print(price(goodslist2))


def chop(val, arr):
    l, r = 0, len(arr)
    while l <= r:
        m = l + (r-l) // 2
        if arr[m] == val:
            return m
        elif arr[m] < val:
            l = m+1
        else:
            r = m - 1
    return -1
print(chop(9, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21])) 

