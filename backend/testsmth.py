
import smtplib
server=smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login('wizer920@gmail.com','ekwj hmku uqqn kole')
to_mail= "luonghaidang6@gmail.com"
body = "dear "+"Hai Luong"+","+"\n"+"\n"+"your OTP is "+"32323232"+"."
subject = "Wizer OTP verification" 
message = f'subject:{subject}\n\n{body}'
server.sendmail("wizer920@gmail.com","luonghaidang6@gmail.com",message)
server.quit()