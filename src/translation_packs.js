var pack1 = {
    0: [() => "new pack", () => "پک جدید"],
    1: ["here is root route of the website", "اینجا صفحه اصلی وب سایت است"],
    2: [
        "i want to login into my account",
        "میخواهم به حساب کاربری ام وارد شوم",
    ],
    3: [
        "i want to register a new account",
        "میخواهم حساب کاربری جدیدی ثبت کنم",
    ],
    4: ["options", "گزینه ها"],
    5: ["all validations must be passed", "همه شروط  ذکر شده باید رعایت شود"],
    7: ["auth was done.", "احراز هویت انجام شد."],
    8: [
        "something went wrong. see more details in console",
        "مشکلی پیش آمد. اطلاعات فنی را در کنسول مرورگر مشاهده کنید",
    ],
    9: ["register page", "صفحه ثبت نام"],
    12: ["enter a password:", "رمز عبوری وارد کنید:"],
    13: ["validations", "اعتبار سنجی ها"],
    14: ["rules", "شروط"],
    16: ["all characters English", "همه کاراکتر ها باید انگلیسی باشند"],
    17: ["password rules:", "شروط رمز عبور"],
    18: ["min numbers : 1 ", "حداقل ۱ عدد"],
    19: ["min lowercase : 1", "حداقل یک حرف کوچک لاتین"],
    20: ["min uppercase : 1", "حداقل یک حرف بزرگ لاتین"],
    21: ["min symbols : 1", "حداقل یک نشانه"],
    22: ["min length : 8", "حداقل طول پسورد ۸ کاراکتر"],
    23: ["status", "وضعیت"],
    24: ["failed", "غیر قابل قبول"],
    25: ["ok", "قابل قبول"],
    26: ["password strength", "قدرت رمز عبور"],
    29: ["create new account", "ساختن حساب کاربری جدید"],
    30: ["input can not be empty", "ورودی نمیتواند خالی باشد"],
    31: ["access denied", "دسترسی رد شد"],
    32: [
        "identifier input can not be empty.",
        "ورودی شناسه نمیتواند خالی باشد ",
    ],
    33: [
        "Error! could not send verification code.",
        "خطا. ارسال کد تایید پیامکی با مشکلی مواجه شد",
    ],
    34: ["login", "ورود به حساب کاربری"],
    35: [
        "enter an identifier. it can be one of these:",
        "یک شناسه وارد کنید. این شناسه باید یکی از موارد زیر باشد:",
    ],
    36: ["your email address", "یک آدرس ایمیل"],
    38: ["user_id", "یک شناسه کاربری"],
    40: ["login using verfication code", "ورود با کد یک بار مصرف"],
    41: ["login with password", "ورود با رمز عبور"],
    42: [
        "if this account has phone number verification code is sent to it and just like that for email address. enter it here and hit the button",
        "اگر این حساب کاربری ایمیل داشته باشد کد تایید ایمیل خواهد شد و همین قضیه برای شماره موبایل هم اتفاق خواهد افتاد",
    ],
    43: [
        "enter your password and hit the button ",
        "رمز عبور خود را وارد کنید",
    ],
    44: ["Terms", "شرایط استفاده از خدمات"],
    45: ["subscription panel will be here", "پنل عضویت اینجا قرار خواهد گرفت"],
    46: ["user", "کاربر"],
    47: ["(anonymous)", "(ناشناس)"],
    48: ["(system)", "(سیستم)"],
    49: ["time machine", "ماشین زمان"],
    50: ["Go Premium", "اشتراک ویژه"],
    51: [
        "invalid url parameter : <thing_id>",
        "پارامتر نامعتبر در آدرس : برای <thing_id>",
    ],
    52: [
        (thing_id) =>
            `not found : no thing is cached with that id (${thing_id})`,
        (thing_id) =>
            `پیدا نشد. هیچ تینگی با این آیدی در کش موجود نیست. ${thing_id}`,
    ],
    53: ["thing", "تینگ"],
    54: ["thing timeline", "تایم لاین"],
    57: ["open its meta", "برو به متا دیتای این"],
    58: ["open its parent pack", "برو به پک پدر این"],
    59: ["thing type is not supported!", "این نوع تینگ فعلا پشتیبانی نمیشود"],
    60: [
        "this thing exists but doesnt have a meta. create one for it first.",
        "این تینگ در کش وجود دارد ولی متایی برای آن وجود ندارد. ابتدا برای آن یک متا بسازید",
    ],
    61: [
        "access denied! you have not write access on this thing",
        "خطای سطح دسترسی! شما اجازه نوشتن در این تینگ را ندارید",
    ],
    62: [
        (type) => `enter new value for ${type}`,
        (type) => `مقدار جدید این متغیر را وارد کنید : ${type}`,
    ],
    63: [
        "invalid value : your input was an empty string",
        "مقدار غیر قابل قبول:‌مقدار این ورودی نمیتواند خالی باشد",
    ],
    64: ["all done", "با موفقیت انجام شد"],
    65: ["this feature will come soon", "این قابلیت به زودی اضافه خواهد شد"],
    66: ["Change Title", "ویرایش عنوان"],
    67: ["Change Description", "ویرایش توضیحات"],
    68: ["Delete Pack", "پاک کردن پک"],
    69: ["Export Unit", "خروجی گرفتن از این واحد"],
    70: ["Pack", "پک"],
    71: ["pack data :", "اطلاعات این پک"],
    72: ["title :", "عنوان :"],
    73: ["description :", "توضیحات :‌"],
    74: ["pack view customisation", "شخصی سازی پک ویو"],
    75: ["sort mode :", "حالت مرتب سازی :"],
    76: ["sorting ascending by time", "مرتب سازی صعودی بر اساس زمان"],
    77: ["sorting descending by time", "مرتب سازی نزولی بر اساس زمان"],
    78: ["showing mode : ", "حالت نمایش :"],
    79: ["grouped mode", "حالت نمایش گروهی"],
    80: ["without groups", "حالت نمایش جداسازی نشده"],
    81: ["note", "یادداشت"],
    82: ["title", "عنوان"],
    83: [
        (thing_id) =>
            `showing note ${thing_id} : there is not any data inside this note`,
        (thing_id) =>
            `قصد داشتیم محتویات یادداشتی با آیدی ${thing_id} نمایش دهیم ولی این یادداشت کلا هیچی توش نیست.`,
    ],
    84: ["Resource", "ریسورس"],
    85: ["task", "وظیفه"],
    86: ["pack", "پک"],
    87: ["packs", "پک ها"],
    88: [
        (type) => `there is not any ${type} here to show `,
        (type) => `اینجا هیچ ${type} ای وجود ندارد`,
    ],
    89: ["tasks", "وظیفه ها"],
    90: ["showing data in grouped mode", "نمایش اطلاعات در حالت گروه بندی شده"],
    91: ["showing data without grouping", "نمایش اطلاعات بدون گروه بندی"],
    92: [", sorting items ascending by time", "و مرتب سازی صعودی بر اساس زمان"],
    93: [
        ", sorting items descending by time",
        "و مرتب سازی نزولی بر اساس زمان",
    ],
    94: [
        "something went wrong when saving the new edited note data. details in console",
        "وقتی داشتیم تغییرات جدید این یادداشت رو ذخیره میکردیم یه چیزی ترکید. اطلاعات فنی رو تو کنسول مرورگر مشاهده کنید ",
    ],
    95: ["saved!", "ذخیره شد!"],
    96: [
        "meta was not found for this note. create it first.",
        "متا دیتا برای این یادداشت یافت نشد. ابتدا آن را بسازید.",
    ],
    97: [
        "you have not access to do this action ",
        "شما سطح دسترسی لازم برای این عمل را ندارید.",
    ],
    98: [
        (type) => `enter new value for ${type}`,
        (type) => `مقدار جدید این متغیر را وارد کنید : ${type}`,
    ],
    99: [
        `there is not any note commit for this note yet. type and hit save to create the
    first note commit`,
        "هیچ تغییری برای این یادداشت پیدا نشد. شروع کنید یه چیز جدید بنویسید و به عنوان اولین تغییر ذخیره کنید ",
    ],
    100: ["open time machine", "ماشین زمان رو باز کن"],
    101: ["note title", "عنوان یادداشت"],
    102: ["note data lock state", "وضعیت قفل نوشتن"],
    103: ["state", "وضعیت"],
    104: [
        (value) => `is_locked_for ${value}`,
        (value) => `نوشتن برای این کاربر قفل شده است: ${value}`,
    ],
    105: ["is not locked", "قفل نوشتن غیر فعال است"],
    106: ["lock for me(start_editing)", "نوشتن را برای من قفل کن"],
    107: ["release lock", "آزاد کردن قفل نوشتن"],
    108: ["note content", "محتویات یادداشت"],
    109: ["save current state", "ذخیره وضعیت فعلی"],
    110: [
        "you cancelled or your input was an empty string",
        "شما ورودی را لغو کردید یا مقداری وارد نکردید",
    ],
    111: ["a file must be chosen", "دقیقا یک فایل باید انتخاب شود"],
    112: ["resource title", "عنوان ریسورس"],
    113: ["resource description", "توضیحات ریسورس"],
    114: ["change resource file", "تغییر فایل ریسورس"],
    115: ["apply change", "اعمال تغییرات"],
    116: ["Event", "رویداد"],
    117: ["event data :", "اطلاعات رویداد"],
    118: ["start", "شروع"],
    119: ["end", "پایان"],
    120: ["calendar category:", "دسته بندی تقویمی : "],
    121: ["Task Raw Data :", "اطلاعات خام این وظیفه: "],
    122: ["end_date :", "زمان پایان: "],
    123: ["start_date :", "زمان شروع : "],
    124: ["calendar_category_id :", "شناسه دسته بندی تقویمی: "],
    125: ["steps", "مراحل"],
    126: ["percent", "درصد"],
    127: ["is done", "انجام شده است"],
    128: ["ask", "سوال"],
    129: ["ask data", "اطلاعات این سوال : "],
    130: ["you have to select an option", "باید یه گزینه را انتخاب کنید"],
    131: ["submit result", "ارسال نتیجه"],
    132: ["submit option", "ثبت این گزینه"],
    133: ["ask result", "نتایج این سوال"],
    134: ["reset my answer", "بازنشانی جواب من"],
    135: ["answers :", "جواب ها"],
    136: ["wrote", "نوشت"],
    137: ["you selected the right option", "شما جواب درست را انتخاب کردید."],
    138: ["you selected a wrong option ", "شما جواب اشتباهی را انتخاب کردید."],
    139: [
        "options with users who have selected that :",
        "گزینه های سوال به همراه کسانی که آن را انتخاب کرده اند : ",
    ],
    140: ["(correct option)", "(گزینه درست)"],
    141: [
        "options with users who have selected that : ",
        "گزینه های سوال به همراه کسانی که آن را انتخاب کرده اند : ",
    ],
    143: [
        "enter new text for this message :",
        "متن جدید این پیام را وارد کنید",
    ],
    144: ["Edit", "ویرایش"],
    145: ["messages", "پیام ها"],
    146: ["type here ...", "اینجا بنویسید..."],
    147: ["send", "ارسال "],
    148: ["user profile", "پروفایل کاربری"],
    149: ["thing_id :", "شناسه تینگ"],
    150: [
        "thing timeline interpretation mode",
        "حالت تفسیر تایم لاین این تینگ",
    ],
    151: ["verbose", "وراج"],
    152: ["short", "خلاصه شده "],
    153: [
        `you have restricted transactions. currently caches are calculated up to a transaction with id =`,
        `شما محدوده تراکنش هایی که برای محاسبه کش ها استفاده می شود را محدود کرده اید. تراکنش ها تا این تراکنش استفاده خواهند شد : `,
    ],
    154: ["remove restriction", "برداشتن محدودیت"],
    155: ["transaction id", "شناسه تراکنش"],
    156: ["diff", "تغییرات"],
    157: ["time", "زمان"],
    158: ["user id", "شناسه کاربری"],
    159: ["activation", "فعالسازی"],
    160: [
        (user_id) => `thing could not be found :${user_id}`,
        (user_id) => `تینگی با این شناسه رو نتونستیم پیدا کنیم : ${user_id}`,
    ],
    161: ["first select an image", "در ابتدا یک عکس انتخاب کنید "],
    162: ["User Settings", "تنظیمات کاربری"],
    163: ["set this new profile image", "تنظیم این عکس به عنوان عکس پروفایل"],
    164: ["importing exported unit", "وارد کردن واحد خروجی گرفته شده "],
    165: ["start importing", "شروع به وارد کردن کن"],
    166: ["calendar type", "نوع تقویم "],
    167: ["Default(English)", "زبان پیشفرض(انگلیسی)"],
    168: ["solar hijri calendar", "تقویم هجری شمسی"],
    169: ["hijri calendar", "تقویم هجری قمری"],
    170: ["Gregorian calendar", "تقویم میلادی"],
    171: ["selecting starting day of week", "تنظیم روز شروع هفته "],
    172: ["popluar options", "گزینه های پر طرفدار"],
    173: ["saturday", "شنبه"],
    174: ["sunday", "یکشنبه"],
    175: ["monday", "دوشنبه"],
    176: ["tuesday", "سه شنبه"],
    177: ["wednesday", "چهارشنبه"],
    178: ["thursday", "پنج شنبه"],
    179: ["friday", "جمعه"],
    180: ["others", "دیگر گزینه ها"],
    181: ["selecting language", "انتخاب زبان"],
    182: ["english", "انگلیسی"],
    183: ["persian", "فارسی"],
    184: ["changing personal information", "ویرایش اطلاعات شخصی"],
    185: ["email address", "آدرس ایمیل"],
    188: ["full_name", "نام و نام خانوادگی"],
    189: [
        "there is not any value for this field yet",
        "برای این متغیر مقداری تنظیم نشده است",
    ],
    190: ["change value", "تغییر مقدار"],
    191: [
        "default pack is specified but that pack could not be found",
        "یه پکی به عنوان پدر این ایتم جدید تنظیم کردید ولی اصلا همچین پکی وجود ندارد",
    ],
    192: ["without a parent pack", "بدون پک پدر"],
    193: ["enter title :", "عنوان را وارد کنید : "],
    194: ["title", "عنوان"],
    195: ["enter description :", "توضیحات را وارد کنید :"],
    196: [
        "choose a parent pack for this pack if you want:",
        "اگر تمایل دارید برای این پک پک پدری انتخاب کنید",
    ],
    197: ["PrivilegesEditor", "بخش تنظیم سطح دسترسی"],
    198: ["read access", "اجازه خواندن اطلاعات"],
    199: ["write access", "اجازه نوشتن اطلاعات"],
    200: ["all", "همه"],
    201: ["specific users", "تنها افراد مشخص"],
    202: ["create pack", "ساختن پک"],
    203: ["create more", "ساختن بیشتر"],
    204: [
        "you have not selected any file to upload.",
        "شما هیچ فایلی برای آپلود انتخاب نکرده اید",
    ],
    205: ["NewResource", "ریسورس جدید"],
    206: [
        "select the file you want to upload : ",
        "فایلی که میخواهید آپلود کنید را انتخاب کنید.",
    ],
    207: ["enter a title:", "عنوانی انتخاب کنید :"],
    208: ["enter a description:", "توضیحاتی وارد کنید: "],
    209: ["upload this resource", "بارگذاری این ریسورس"],
    210: ["NewNote", "یادداشت جدید"],
    211: ["submit this note", "ثبت این یادداشت"],
    212: ["enter its percent ", "درصد این مرحله را وارد کنید"],
    213: [
        "percent must be a number between 0-100",
        "درصد باید عددی بین ۰ و ۱۰۰ باشد",
    ],
    214: [
        "there must be at least a single step defined",
        "حداقل یک مرحله باید تعریف شده باشد",
    ],
    215: [
        "sum of percent of steps must be equal to 100",
        "جمع درصد مرحله های این وظیفه باید برابر با ۱۰۰ باشد.",
    ],
    216: [
        "you must choose a calendar category for this",
        "برای این آیتم باید یک دسته بندی تقویمی انتخاب کنید.",
    ],
    217: ["NewTask", "وظیفه جدید"],
    218: [
        "enter a title for this task : ",
        "عنوانی برای این وظیفه وارد کنید :",
    ],
    219: [
        "enter a description for this task : ",
        "توضیحاتی برای این وظیفه وارد کنید :",
    ],
    220: ["add new step", "اضافه کردن مرحله جدید"],
    221: [
        "select an existing calendar category",
        "از بین دسته بندی های تقویمی موجود موردی را انتخاب کنید",
    ],
    222: [
        `(if what you want was not in existing categories create it now in section below)`,
        `(اگر موردی که به دنبال آن هستید وجود ندارید ابتدا آن را بسازید)`,
    ],
    223: ["creating a calendar category", "ساختن دسته بندی تقویمی جدید"],
    224: ["name of calendar category :", "نام دسته بندی تقویمی جدید: "],
    225: [
        "and enter one of these colors here :",
        "و یکی از رنگ های زیر را وارد کنید : ",
    ],
    226: [
        "done! new calendar category was added",
        "دسته بندی تقویمی جدید با موفقیت اضافه شد",
    ],
    227: ["create category", "ساختن دسته بندی جدید"],
    228: [
        `select 'start' and 'end' dates for this task :`,
        `برای این وظیفه ابتدا و انتهایی مشخص کنید`,
    ],
    229: [
        (type) => `select task ${type} date`,
        (type) => `زمان ${type} این وظیفه را مشخص کنید`,
    ],
    230: [
        "select a parent pack for this unit if you want :",
        "برای این واحد در صورت تمایل پک پدری تعریف کنید:",
    ],
    231: ["submit", "ثبت اطلاعات"],
    232: ["NewEvent", "رویداد جدید"],
    233: [
        (type) => `select event ${type} date`,
        (type) => `زمان ${type} این رویداد را انتخاب کنید`,
    ],
    234: ["submit this event", "ثبت این رویداد"],
    237: [
        'in "multiple choice" mode you must select correct option',
        "در حالت سوال چند گزینه باید گزینه ای را به عنوان گزینه صحیح علامت بزنید",
    ],
    238: ["enter new option", "گزینه جدید را وارد کنید"],
    239: ["NewAsk", "سوال جدید"],
    240: ["NewAsk", "سوال جدید"],
    241: ["enter a question : ", "سوالی وارد کنید :"],
    242: ["select mode of this ask : ", "حالت این سوال را تعریف کنید :"],
    243: ["multiple choice", "سوال چند گزینه ای"],
    244: ["poll", "حالت نظرسنجی"],
    245: ["text answer", "حالت جواب تشریحی"],
    246: ["content", "محتویات"],
    247: ["add a new option", "اضافه کردن گزینه جدید"],
    248: ["option index", "شناسه گزینه"],
    249: ["option text", "متن گزینه"],
    250: ["is correct answer", "این گزینه گزینه صحیح است"],
    251: ["true", "صحیح"],
    252: ["false", "نادرست"],
    253: ["enter index of correct option", "شناسه گزینه صحیح را وارد کنید"],
    254: ["set correct option", "تنظیم گزینه صحیح"],
    255: ["submit this unit", "ثبت کردن این واحد"],
    256: ["tasks analytics", "تحلیل وظیفه ها"],
    257: ["percentage", "درصد"],
    258: [
        (
            calendar_categories_length,
            day_tasks_length,
            different_categories_length
        ) => `you have defined ${calendar_categories_length}{" "}
    calendar categories at all. you had{" "}
    ${day_tasks_length} tasks in this day and they are
    from{" "}
    ${different_categories_length}{" "}
    different catrgories as explained below :`,
        (
            calendar_categories_length,
            day_tasks_length,
            different_categories_length
        ) =>
            `شما به طور کلی ${calendar_categories_length} تا دسته بندی تقویمی دارید. در این روز ${day_tasks_length} تا وظیفه داشتید که از ${different_categories_length} دسته بندی تقویمی مختلف بودند.`,
    ],
    259: ["events analytics", "تحلیل رویداد ها"],
    260: [
        (
            calendar_categories_length,
            day_events_length,
            done_steps_length,
            i
        ) => `you have defined ${calendar_categories_length}{" "}
    calendar categories at all. you had{" "}
    ${day_events_length} events and{" "}
    ${done_steps_length}{" "}
    done tasks in this day and they are from{" "}
    ${i}{" "}
    different catrgories as explained below :`,
        (calendar_categories_length, day_events_length, done_steps_length, i) =>
            `شما به طور کلی ${calendar_categories_length} تا دسته بندی تقویمی دارید. در این روز ${day_events_length} تا رویداد و ${done_steps_length} تا وظیفه انجام شده داشتید که از ${i} دسته بندی متفاوت بودند.`,
    ],
    261: ["overall analytics", "تحلیل کلی"],
    262: [
        `a detailed comparison between your plan for this day and what has actually happened :`,
        `مقایسه جزئی برنامه ریزی شما و چیزی که در واقعیت انجام دادید:`,
    ],
    263: [
        (i) => `you have successfully turned{" "}
    ${i}
    % of today's tasks to events (it means marking them as
    done)`,
        (i) => `شما با موفقیت ${i} از تسک های امروز را انجام دادید.`,
    ],
    264: [
        "you have not defined any task in this day",
        "شما هیچ وظیفه ای برای امروز تعریف نکرده اید",
    ],
    265: ["category name", "نام دسته بندی تقویمی"],
    266: ["planned percent", "درصد برنامه ریزی شده"],
    267: ["real percent", "درصد واقعی"],
    268: [
        "there is not any task or event where you clicked",
        "در جایی که کلیک کردید هیچ موردی تعریف نشده است",
    ],
    269: ["DayCalendar", "تقویم روزانه"],
    270: ["showing from", "نمایش از"],
    271: ["to", "تا"],
    272: ["day tasks", "وظیفه های این روز"],
    273: ["tasks of this day :", "وطیقه های این روز :"],
    274: ["day events", "رویداد های روز"],
    275: ["events of this day :", "رویداد های این روز :"],
    276: ["bars", "خط ها"],
    277: ["time", "زمان"],
    278: ["tasks", "وظیفه ها"],
    279: ["events", "رویداد ها"],
    280: ["Default", "پیشفرض"],
}
const t = { english: {}, persian: {} }
Object.keys(pack1).forEach((key) => {
    t["english"][key] = pack1[key][0]
    t["persian"][key] = pack1[key][1]
})
export default t
