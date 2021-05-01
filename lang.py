from google_trans_new import google_translator

translator = google_translator()  

arr = [["عربى", "Arabic", "ar"], ["中国人", "Chinese (Simplified)", "zh-Hans"], ["Čeština", "Czech", "cs"], ["Dansk", "Danish", "da"], ["Nederlands", "Dutch", "nl"], ["English", "English", "en"], ["Français", "French", "fr"], ["Deutsch", "German", "de"], ["Ελληνικά", "Greek", "el"], ["עִברִית", "Hebrew", "he"], ["हिन्दी", "Hindi", "hi"], ["Italiano", "Italian", "it"], ["한국어", "Korean", "ko"], ["Polski", "Polish", "pl"], ["русский", "Russian", "ru"], ["Español", "Spanish", "es"], ["Svenska", "Swedish", "sv"]]

# arr = ['Arabic', 'Chinese (Simplified)', 'Czech', 'Danish', 'Dutch', 'English', 'French', 'German', 'Greek', 'Hebrew', 'Hindi', 'Italian', 'Korean', 'Polish', 'Russian', 'Spanish', 'Swedish']

for i in arr:
    words = ["Cancel", "Settings", "Language", "Bracelet Settings", "Sentry Mode", "scan", "search", "find", "who", "where", "when", "what", "atheia"]

    print(i[1])

    for word in words:
        trans = translator.translate(word, lang_src='en', lang_tgt=i[2])
        trans = trans[0] if isinstance(trans, list) else trans
        print('"%s"' % word, "=", '"%s";' % trans.strip())

    print()
