import urllib.request

#file1 = open("log.html", "r")
#log = file1.read()
#file2 = open("horoscope.html", "r")
#site = file2.read()
#file1.close()
#file2.close()
#file3 = open("horoscope.html", "w")
#site_index1 = site.find('ce_page">') + 9
#site_index2 = site[site_index1:].find('</div>')
#new_site = site[:site_index1] + log + site[site_index2:]
#file3.write(new_site)
#file3.close

response = urllib.request.urlopen('http://www.findyourfate.com/rss/horoscope-astrology.php')
data = response.read()      
text = data.decode('utf-8') 
skip_index = text.find('</description>')
index_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
index_end_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
for x in range(12):
 index_list[x] = (text.find('<description>', skip_index)) + 13
 index_end_list[x] = text.find('</description>', index_list[x])
 skip_index = index_end_list[x]

id = '</p>\n'
yesterday_1 = '<p id="Aries">' + text[index_list[0]:index_end_list[0]] + id
yesterday_2 = '<p id="Taurus">' + text[index_list[1]:index_end_list[1]] + id
yesterday_3 = '<p id="Gemini">' + text[index_list[2]:index_end_list[2]] + id
yesterday_4 = '<p id="Cancer">' + text[index_list[3]:index_end_list[3]] + id
yesterday_5 = '<p id="Leo">' + text[index_list[4]:index_end_list[4]] + id
yesterday_6 = '<p id="Virgo">' + text[index_list[5]:index_end_list[5]] + id
yesterday_7 = '<p id="Libra">' + text[index_list[6]:index_end_list[6]] + id
yesterday_8 = '<p id="Scorpio">' + text[index_list[7]:index_end_list[7]] + id
yesterday_9 = '<p id="Sagittarius">' + text[index_list[8]:index_end_list[8]] + id
yesterday_10 = '<p id="Capricorn">' + text[index_list[9]:index_end_list[9]] + id
yesterday_11 = '<p id="Aquarius">' + text[index_list[10]:index_end_list[10]] + id
yesterday_12 = '<p id="Pisces">' + text[index_list[11]:index_end_list[11]] + id
yesterday_total = yesterday_1 + yesterday_2 + yesterday_3 + yesterday_4 + yesterday_5 + yesterday_6 + yesterday_7 + yesterday_8 + yesterday_9 + yesterday_10 + yesterday_11 + yesterday_12

file4 = open("log.html", "w")
file4.write(yesterday_total)
file4.close