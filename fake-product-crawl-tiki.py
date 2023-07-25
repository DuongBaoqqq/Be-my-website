import csv
import pandas as pd

data = pd.read_csv('H:\WebBanhang\Backend\HugeDS.csv')
l = []
dictData = {}
# print(data['name'])

for index,row in data.iterrows():
    dictData['name'] = row['name']
    dictData['description'] = 'Nothing'
    dictData['price'] = float(row['original_price'])
    dictData['sellerId'] = 2
    l.append(dictData)

for i in l:
    print('{')
    print(f"name: '{i['name']}',")
    print(f"description: '{i['description']}',")
    print(f"price: {i['price']},")
    print(f"sellerId: 2,")
    print('createdAt: new Date(),')
    print('updatedAt: new Date(),')
    print('},')




# print(dictData)