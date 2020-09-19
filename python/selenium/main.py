from selenium import webdriver
import csv

URL = "https://m.safekorea.go.kr/idsiSFK/neo/main_m/dis/disasterDataView.html"
#pageMin = 23608
pageMax = 57289 + 1
messages = []

browser = webdriver.Edge(executable_path="msedgedriver.exe")

cnt = 0
for page in range(23700, 23710):
        browser.get(f"{URL}?bbsOrdr={page}")
    sendTime = browser.find_element_by_id("bbsMapSj").text.split()
    if sendTime:
        print(f"({page}/{pageMax-1})번째 재난문자 가져오는 중...")
        context = browser.find_element_by_id("bbsMapCn").text.split("\n\n-송출지역-\n")
        # print(f"{sendTime[0]} | {sendTime[1]}\n{context[0]}")
        if len(context) == 1:
            context.append("")
        messages.append({"index": page, "date": sendTime[0], "time": sendTime[1], "text": context[0], "location": context[1].replace("\n", ",")})
        cnt += 1
    else:
        continue

print(f"총 {cnt}개 추출 완료!")

file = open("재난문자test.csv", mode="w")
writer = csv.writer(file)

writer.writerow(["일련번호", "날짜", "시간", "내용", "송출지역"])
for info in messages:
    print(info)
    writer.writerow(list(info.values()))

