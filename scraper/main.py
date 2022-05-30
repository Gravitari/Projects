from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from bs4 import BeautifulSoup
import pandas as pd

driver = webdriver.Chrome()
driver.get("https://www.centris.ca/fr/courtiers-immobiliers?uc=0")
time.sleep(3)

respData = driver.page_source
soup = BeautifulSoup(respData, 'html.parser') # NORMAL SCRAPE DIDN'T WORK
container = soup.find("div",attrs={"id": "divMainResult"})


page_num = int("".join(soup.find("li",class_="pager-current").text.split(" ")[2:4]))

temp = []
for i in range(5): # page_num
    button = driver.find_element_by_xpath("/html/body/main/section/div[5]/div/div/ul/li[4]")
    driver.execute_script("arguments[0].click();", button)
    time.sleep(2)

    respData = driver.page_source
    soup = BeautifulSoup(respData, 'html.parser')  # NORMAL SCRAPE DIDN'T WORK
    container = soup.find("div", attrs={"id": "divMainResult"})
    divs = container.find_all('div', class_="broker-thumbnail-item col-12 col-lg-6 legacy-reset")
    for i in divs:
        name = i.find("h1", class_="broker-info__broker-title h5 mb-0").text.strip()
        company = i.find("h2", class_="p1 font-weight-medium m-0").text.strip()
        temp.append([name,company])

df = pd.DataFrame(temp, columns=["Name","Company"])
df.to_csv("data.csv")