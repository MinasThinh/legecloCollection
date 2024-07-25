from tkinter import *
from tkinter import messagebox
def getDatabase():
    with open("database.db","r") as f:
        return f.read()
def updateDatabase(data):
    with open("database.db","w") as f:
        f.write(data)
def addData():
    global database
    mp4 = enterMP4Url_entry.get()
    png = enterPNGUrl_entry.get()
    # split id
    mp4 = mp4.split("/file/d/")[1]
    # split /view
    mp4 = mp4.split("/view")[0]
    #Thumbnails/Anastasia%201.png
    #split name
    png = png.split("Thumbnails/")[1]
    # get name char and eps
    # get the eps by seperate the .png
    eps = png[len(png) - 5]
    # seperate the %20(whitespace)
    charname = png[:len(png) - 8]
    charname = charname.replace("%20"," ")
    png = f"{charname} {eps}"
    dataUpd = f"{mp4} | {png}"
    if messagebox.askyesno("Database Updater",f"Are you sure about updating this data?\n{mp4} | {png}"):
        # check if data is already exist

        db = database.split('\n')
        for data in db:
            if data == dataUpd:
                messagebox.showerror("Database Update",f"Update failed!\nThe following data is already exist in database!\n{dataUpd}")
                return
        database += '\n' + dataUpd
        updateDatabase(database)
        messagebox.showinfo("Database updater","Data updated successfully!")
database = getDatabase()
win = Tk()
win.geometry("800x500")
win.title("Database Updater")

MP4Url = StringVar()
PNGUrl = StringVar()

enterMP4Url_lbl = Label(win,text="Enter MP4 Url ",font=("Helvetica 20"))
enterPNGUrl_lbl = Label(win,text="Enter PNG Url ",font=("Helvetica 20"))

enterMP4Url_entry = Entry(win,textvariable=MP4Url,font=("Helvetica 20"))
enterPNGUrl_entry = Entry(win,textvariable=PNGUrl,font=("Helvetica 20"))

submitForm = Button(win,text="Add",font=("Times 20"),command=addData,bg="green",fg="white")

enterMP4Url_lbl.place(relx=.2,rely=.1,anchor="center")
enterPNGUrl_lbl.place(relx=.2,rely=.2,anchor="center")
enterMP4Url_entry.place(relx=.6,rely=.1,anchor="center")
enterPNGUrl_entry.place(relx=.6,rely=.2,anchor="center")
submitForm.place(relx=.85,rely=.15,anchor="center")
win.mainloop()
