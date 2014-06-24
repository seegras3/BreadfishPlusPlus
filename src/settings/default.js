module.exports = [
    {
        'name': 'Allgemeine Einstellungen',
        'key': 'common',
        'categories': [
            {
                'name': 'Erweiterungen',
                'options': [
                    {
                        'name': 'Alternative PN Benachrichtigung',
                        'key': 'option.common.extension.privateMessageNotification',
                        'toggle': true,
                        'desc': 'Versteckt den Hinweis auf neue Private Nachrichten, und zeigt ihn stattdessen am unteren rechten Bildschirmrand an. Es wird in regelmäßigen Abständen überprüft, ob du eine neue PN hast und die Benachrichtigung wird autmatisch aktualisiert.'
                    },
                    {
                        'name': 'Asynchrone Datenübertragung',
                        'key': 'option.common.extension.ajaxify',
                        'toggle': true,
                        'desc': 'Lässt verschiedene Operationen durch <a href="http://de.wikipedia.org/wiki/Ajax_(Programmierung)">Ajax</a> im Hintergrund ausführen anstatt die Seite neu zu laden.'
                    },
                    {
                        'name': 'Alternative Tooltips',
                        'key': 'option.common.extension.tooltip',
                        'toggle': true,
                        'desc': 'Ersetzt die Standard-Browser-Tooltips durch eigene.'
                    },
                    {
                        'name': 'Spitznamen für Benutzer',
                        'key': 'option.common.extension.nicknames.active',
                        'toggle': true,
                        'desc': 'Fügt im Benutzerprofil eine Option hinzu, die es ermöglicht dem Benutzer einen eigenen Spitznamen zu geben. Dieser Spitzname wird dann, anstatt des eigentlichen Benutzernamens, im Forum angezeigt.'
                    },
                    {
                        'name': 'Meldungsgründe',
                        'key': 'option.common.extension.reportReasons',
                        'toggle': true,
                        'desc': 'Fügt vordefinierte Gründe beim Melden eines Beitrags hinzu.'
                    },
                    {
                        'name': 'Relative Zeitangaben',
                        'key': 'option.common.extension.timeago',
                        'toggle': true,
                        'desc': 'Ersetzt die Zeitangaben im Forum. Aus "Heute, 12:34" wird dann z.b "vor 12 Minuten".'
                    }
                ]
            },
            {
                'name': 'Fehlerbehebungen',
                'options': [
                    {
                        'name': 'Header-Fix',
                        'key': 'option.common.bugfix.headerFix',
                        'toggle': true,
                        'desc': 'Behebt den Fehler im Header-Fix Stil, bei dem die Breadcrumbs verschwinden. Mehr Informationen zu diesem Fehler findest du hier: <a target="_blank" href="http://sa-mp.de/B++/p1643494-/">Header Fix buggt</a>.'
                    },
                    {
                        'name': 'Expander',
                        'key': 'option.common.bugfix.expander',
                        'toggle': true,
                        'desc': 'Behebt den Expander-Bug, der auftritt, wenn ein Benutzer mehrere Expander auf einer Seite nutzt. Mehr Informationen zu diesem Fehler findest du hier: <a target="_blank" href="http://sa-mp.de/B++/p1701085-/">Spoiler</a>.'
                    },
                    {
                        'name': 'Tabmenu',
                        'key': 'option.common.bugfix.tabmenu',
                        'toggle': true,
                        'desc': 'Behebt den Fehler im Tumek Design, bei dem die Schrift im Tabmenu nur schwer erkennbar ist. Mehr Informationen zu diesem Fehler findest du hier: <a target="_blank" href="http://sa-mp.de/B++/p1662628-/">Manglhafte Farbwahl beim neuen Design</a>.'
                    },
                    {
                        'name': 'Bildverkleinerung',
                        'key': 'option.common.bugfix.imageResize',
                        'toggle': true,
                        'desc': 'Passt Bilder, die zu groß sind und deshalb vom WBB verkleiner wurde, auf die exakte Breite des Beitrags an.'
                    }
                ]
            },
            {
                'name': 'Filter',
                'options': [
                    {
                        'name': 'Ankündigungen',
                        'key': 'option.common.filter.announcement.active',
                        'toggle': true,
                        'desc': 'Aktiviert die Option Permanente Anküdigungen individuell auszublenden.'
                    }
                ]
            },
            {
                'name': 'Debug',
                'options': [
                    {
                        'name': 'Debugmode',
                        'key': 'option.debugmode',
                        'toggle': true,
                        'desc': 'Aktiviert den Debugmode und loggt Aktionen in die Konsole.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Forenübersicht',
        'key': 'boards',
        'categories': [
            {
                'name': 'Erweiterungen',
                'options': [
                    {
                        'name': 'Die letzten X Beiträge',
                        'key': 'option.boards.extension.lastPosts',
                        'range': true,
                        'min': 1,
                        'max': 10,
                        'desc': 'Passt die Anzahl der "Letzte X Beiträge"-Box auf der Startseite an.'
                    },
                    {
                        'name': 'IRC Shoutbox',
                        'key': 'option.boards.extension.ircShoutbox.active',
                        'toggle': true,
                        'desc': 'Zeigt eine Shoutbox auf der Startseite an, mit der du dich direkt mit unserem Chat Verbinden kannst. Mehr Informationen zu unserem Chat findest du hier: <a href="http://sa-mp.de/B++/p924945-/">IRC-Chat</a>.'
                    }
                ]
            },
            {
                'name': 'Fehlerbehebungen',
                'options': [
                    {
                        'name': 'Suche Icon',
                        'key': 'option.boards.extension.searchIcon',
                        'toggle': true,
                        'desc': 'Zeigt das Icon für die Suche im Footer wieder richtig an.'
                    }
                ]
            },
            {
                'name': 'Filter',
                'options': [
                    {
                        'name': 'Zur Zeit sind X Benutzer online',
                        'key': 'option.boards.filter.usersOnline',
                        'toggle': true,
                        'desc': 'Entfernt die Infobox auf der Startseite, die anzeigt, wer gerade online ist.'
                    },
                    {
                        'name': 'Statistik',
                        'key': 'option.boards.filter.statistics',
                        'toggle': true,
                        'desc': 'Entfernt die Infobox auf der Startseite, die die Forenstatistik anzeigt.'
                    },
                    {
                        'name': 'Geburtstage',
                        'key': 'option.boards.filter.birthdays',
                        'toggle': true,
                        'desc': 'Entfernt die Infobox auf der Startseite, die anzeigt, wer heute Geburtstag hat.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Themenübersicht',
        'key': 'threads',
        'categories': [
            {
                'name': 'Erweiterungen',
                'options': [
                    {
                        'name': 'Ankündigungen und wichtige Themen',
                        'key': 'option.threads.extension.sticky',
                        'toggle': true,
                        'desc': 'Trennt Ankündigungen und wichtige Themen voneinander.'
                    }
                ]
            },
            {
                'name': 'Filter',
                'options': [
                    {
                        'name': 'Gelöschte Themen',
                        'key': 'option.threads.filter.deleted',
                        'toggle': true,
                        'desc': 'Blendet gelöschte Themen komplett aus.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Beiträge & Nachrichten',
        'key': 'posts',
        'categories': [
            {
                'name': 'Erweiterungen',
                'options': [
                    {
                        'name': 'Kurz-URL',
                        'key': 'option.posts.extension.shorturl',
                        'toggle': true,
                        'desc': 'Zeigt in der Beitragsansicht zu jedem Beitrag einen kurzen Link (~25 Zeichen) an, der direkt zum Beitrag führt.'
                    },
                    {
                        'name': 'Youtube Vorschau',
                        'key': 'option.posts.extension.youtubePreview',
                        'toggle': true,
                        'desc': 'Ersetzt Youtube-Videos durch eine Vorschau-Box mit Informationen zu dem Video.'
                    },
                    {
                        'name': 'Danksagungen anzeigen',
                        'key': 'option.posts.extension.thanks.active',
                        'toggle': true,
                        'desc': 'Zeigt die Anzahl der Danksagungen, die ein Benutzer bekommen hat, in Beiträgen an.'
                    },
                    {
                        'name': 'Höhenbegrenzung für Signaturen',
                        'key': 'option.posts.extension.signatureHeight',
                        'toggle': true,
                        'desc': 'Entfernt die Scrollbars aus den Signaturen und zeigt sie in voller Höhe an.'
                    },
                    {
                        'name': 'Bilderzoom',
                        'key': 'option.posts.extension.imageResize',
                        'toggle': true,
                        'desc': 'Erlaubt es, die Größe von Bildern in Signaturen und Posts per Drag & Drop zu ändern.'
                    },
                    {
                        'name': 'Deaktivierung von externen Bildern',
                        'key': 'option.posts.extension.removeExternalImages',
                        'toggle': true,
                        'desc': 'Entfernt Bilder, die nicht von sa-mp.de stammen, aus den Themen und zeigt stattdessen nur die URL des Bildes an.'
                    },
                    {
                        'name': 'Syntaxhervorhebung',
                        'key': 'option.posts.extension.syntaxhighlightning',
                        'toggle': true,
                        'desc': 'Ersetzt die Standard-Syntaxhervorhebung durch eine verbesserte Hervorhebung.'
                    },
                    {
                        'name': 'Lazyload',
                        'key': 'option.posts.extension.lazyload',
                        'toggle': true,
                        'desc': 'Lädt externe Bilder erst, wenn sie im Sichtfenster des Browsers sind, und beschleunigt dadurch den Aufbau der Seite.'
                    }
                ]
            },
            {
                'name': 'Filter',
                'options': [
                    {
                        'name': 'Youtube-Videos',
                        'key': 'option.posts.filter.youtube',
                        'toggle': true,
                        'desc': 'Entfernt Videos aus Beiträgen und Signaturen und ersetzt sie stattdessen mit dem Link zum jeweiligen Video.'
                    },
                    {
                        'name': 'Gelöschte Beiträge',
                        'key': 'option.posts.filter.deleted',
                        'toggle': true,
                        'desc': 'Blendet gelöschte Beiträge komplett aus.'
                    },
                    {
                        'name': 'Bedankomat',
                        'key': 'option.posts.filter.thanko',
                        'toggle': true,
                        'desc': 'Blendet den Bedankomat in Beiträgen aus.'
                    },
                    {
                        'name': 'Ignorierte Benutzer',
                        'key': 'option.posts.filter.ignored',
                        'toggle': true,
                        'desc': 'Blendet Beiträge von ignorierten Benutzern ganz aus.'
                    },
                    {
                        'name': 'Hilfreichste Antwort',
                        'key': 'option.posts.filter.bestans',
                        'toggle': true,
                        'desc': 'Entfernt die Markierung der hilfreichsten Antwort.'
                    },
                    {
                        'name': 'Beitragscounter',
                        'key': 'option.posts.filter.postcount',
                        'toggle': true,
                        'desc': 'Blendet den Beitragscounter aus.'
                    },
                    {
                        'name': 'Benutzertitel',
                        'key': 'option.posts.filter.usertitle',
                        'toggle': true,
                        'desc': 'Blendet den Benutzertitel aus.'
                    },
                    {
                        'name': 'Benutzerrang',
                        'key': 'option.posts.filter.userrank',
                        'toggle': true,
                        'desc': 'Blendet den Benutzerrang aus.'
                    },
                    {
                        'name': 'Zusätzlicher Benutzerrang',
                        'key': 'option.posts.filter.additionalUserrank',
                        'toggle': true,
                        'desc': 'Blendet den zusätzlichen Benutzerrang (falls vorhanden) aus.'
                    },
                    {
                        'name': 'Registrierungsdatum',
                        'key': 'option.posts.filter.regdate',
                        'toggle': true,
                        'desc': 'Blendet das Registrierungsdatum aus.'
                    },
                    {
                        'name': 'Geschlecht',
                        'key': 'option.posts.filter.gender',
                        'toggle': true,
                        'desc': 'Blendet das Geschlecht aus.'
                    },
                    {
                        'name': 'XBL Gamertag',
                        'key': 'option.posts.filter.xblGamertag',
                        'toggle': true,
                        'desc': 'Blendet den XBL Gamertag aus.'
                    },
                    {
                        'name': 'PSN ID',
                        'key': 'option.posts.filter.psnid',
                        'toggle': true,
                        'desc': 'Blendet die PSN ID aus.'
                    },
                    {
                        'name': 'Steam',
                        'key': 'option.posts.filter.steam',
                        'toggle': true,
                        'desc': 'Blendet den Steamnamen aus.'
                    },
                    {
                        'name': 'Origin',
                        'key': 'option.posts.filter.origin',
                        'toggle': true,
                        'desc': 'Blendet den Originnamen aus.'
                    },
                    {
                        'name': 'Website',
                        'key': 'option.posts.filter.website',
                        'toggle': true,
                        'desc': 'Blendet die Website aus.'
                    },
                    {
                        'name': 'ICQ',
                        'key': 'option.posts.filter.icq',
                        'toggle': true,
                        'desc': 'Blendet die Nummer des ICQ-Accounts aus.'
                    },
                    {
                        'name': 'Windows Live',
                        'key': 'option.posts.filter.msn',
                        'toggle': true,
                        'desc': 'Blendet den Windows Live Messenger-Namen aus.'
                    },
                    {
                        'name': 'Skype',
                        'key': 'option.posts.filter.skype',
                        'toggle': true,
                        'desc': 'Blendet den Skype-Namen aus.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Beitrag/Nachrichten erstellen',
        'key': 'postCreate',
        'categories': [
            {
                'name': 'Erweiterungen',
                'options': [
                    {
                        'name': 'Benutzer-Autovervollständigung',
                        'key': 'option.postCreate.extension.nickcomplete',
                        'toggle': true,
                        'desc': 'Wenn du im Post z.b "@madd" schreibst, erscheint, ähnlich wie bei der Mitgliedersuche, eine Auswahlliste mit Benutzernamen im Forum, die auf die bereits getippten Anfangsbuchstaben passen. Durch <strong>Tab</strong> kannst du durch die Liste schalten und durch <strong>Space</strong> bestätigst du den ausgewählten Namen.'
                    }
                ]
            },
            {
                'name': 'Smilies',
                'options': [
                    {
                        'name': 'Rageicons',
                        'key': 'option.postCreate.smilies.rage',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor eine neue Kategorie mit Rageicons hinzu.'
                    },
                    {
                        'name': 'Skype',
                        'key': 'option.postCreate.smilies.skype',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor eine neue Kategorie mit Skype-Smilies hinzu.'
                    },
                    {
                        'name': 'Y o l k s',
                        'key': 'option.postCreate.smilies.yolks',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor eine neue Kategorie mit Y o l k s-Smilies hinzu.'
                    },
                    {
                        'name': 'Emoji',
                        'key': 'option.postCreate.smilies.emoji',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor eine neue Kategorie mit Emojicons hinzu.'
                    }
                ]
            },
            {
                'name': 'BBCodes',
                'options': [
                    {
                        'name': 'E-Mail',
                        'key': 'option.postCreate.bbcode.email',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den E-Mail-BBCode hinzu.'
                    },
                    {
                        'name': 'Text tiefstellen',
                        'key': 'option.postCreate.bbcode.sub',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den BBCode hinzu, um Text tiefzustellen.'
                    },
                    {
                        'name': 'Text hochstellen',
                        'key': 'option.postCreate.bbcode.sup',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den BBCode hinzu, um Text hochzustellen.'
                    },
                    {
                        'name': 'Java-Quelltext',
                        'key': 'option.postCreate.bbcode.java',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Java-Quelltext-BBCode hinzu.'
                    },
                    {
                        'name': 'Cascading Style Sheet',
                        'key': 'option.postCreate.bbcode.css',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Cascading Style Sheet-BBCode hinzu.'
                    },
                    {
                        'name': 'HTML',
                        'key': 'option.postCreate.bbcode.html',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den HTML-BBCode hinzu.'
                    },
                    {
                        'name': 'XML',
                        'key': 'option.postCreate.bbcode.xml',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den XML-BBCode hinzu.'
                    },
                    {
                        'name': 'Javascript-Quelltext',
                        'key': 'option.postCreate.bbcode.js',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Javascript-Quelltext-BBCode hinzu.'
                    },
                    {
                        'name': 'C/C++-Quelltext',
                        'key': 'option.postCreate.bbcode.c',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den C/C++-Quelltext-BBCode hinzu.'
                    },
                    {
                        'name': 'Dropdown',
                        'key': 'option.postCreate.bbcode.dropdown',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Dropdown-BBCode hinzu.'
                    },
                    {
                        'name': 'Sevenload',
                        'key': 'option.postCreate.bbcode.sevenload',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Sevenload-BBCode hinzu.'
                    },
                    {
                        'name': 'Clipfish',
                        'key': 'option.postCreate.bbcode.clipfish',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Clipfish-BBCode hinzu.'
                    },
                    {
                        'name': 'Googlevideo',
                        'key': 'option.postCreate.bbcode.googlevideo',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den Googlevideo-BBCode hinzu.'
                    },
                    {
                        'name': 'MySpace',
                        'key': 'option.postCreate.bbcode.myspace',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den MySpace-BBCode hinzu.'
                    },
                    {
                        'name': 'MyVideo',
                        'key': 'option.postCreate.bbcode.myvideo',
                        'toggle': true,
                        'desc': 'Fügt dem WYSIWYG-Editor das Icon für den MyVideo-BBCode hinzu.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Benutzerprofil',
        'key': 'profile',
        'categories': [
            {
                'name': 'Filter',
                'options': [
                    {
                        'name': 'Danksagungen',
                        'key': 'option.profile.filter.thanks',
                        'toggle': true,
                        'desc': 'Blendet die Danksagungen in Benutzerprofilen aus.'
                    },
                    {
                        'name': 'Beitragscounter',
                        'key': 'option.profile.filter.postcount',
                        'toggle': true,
                        'desc': 'Blendet den Beitragscounter aus.'
                    },
                    {
                        'name': 'Benutzertitel',
                        'key': 'option.profile.filter.usertitle',
                        'toggle': true,
                        'desc': 'Blendet den Benutzertitel aus.'
                    },
                    {
                        'name': 'Benutzerrang',
                        'key': 'option.profile.filter.userrank',
                        'toggle': true,
                        'desc': 'Blendet den Benutzerrang aus.'
                    },
                    {
                        'name': 'Zusätzlicher Benutzerrang',
                        'key': 'option.profile.filter.additionalUserrank',
                        'toggle': true,
                        'desc': 'Blendet den zusätzlichen Benutzerrang (falls vorhanden) aus.'
                    },
                    {
                        'name': 'Geschlecht',
                        'key': 'option.profile.filter.gender',
                        'toggle': true,
                        'desc': 'Blendet das Geschlecht aus.'
                    },
                    {
                        'name': 'Registrierungsdatum',
                        'key': 'option.profile.filter.regdate',
                        'toggle': true,
                        'desc': 'Blendet das Registrierungsdatum aus.'
                    },
                    {
                        'name': 'Über Mich',
                        'key': 'option.profile.filter.aboutMe',
                        'toggle': true,
                        'desc': 'Blendet den "Über mich"-Block aus.'
                    },
                    {
                        'name': 'Geburtstag',
                        'key': 'option.profile.filter.birthday',
                        'toggle': true,
                        'desc': 'Blendet den Geburtstag aus.'
                    },
                    {
                        'name': 'Wohnort',
                        'key': 'option.profile.filter.location',
                        'toggle': true,
                        'desc': 'Blendet den Wohnort aus.'
                    },
                    {
                        'name': 'Beruf',
                        'key': 'option.profile.filter.occupation',
                        'toggle': true,
                        'desc': 'Blendet den Beruf aus.'
                    },
                    {
                        'name': 'Hobbys',
                        'key': 'option.profile.filter.hobbys',
                        'toggle': true,
                        'desc': 'Blendet die Hobbys aus.'
                    },
                    {
                        'name': 'Teamspeak UID',
                        'key': 'option.profile.filter.tsuid',
                        'toggle': true,
                        'desc': 'Blendet die Teamspeak UID aus.'
                    },
                    {
                        'name': 'XBL Gamertag',
                        'key': 'option.profile.filter.xblGamertag',
                        'toggle': true,
                        'desc': 'Blendet den XBL Gamertag aus.'
                    },
                    {
                        'name': 'PSN ID',
                        'key': 'option.profile.filter.psnid',
                        'toggle': true,
                        'desc': 'Blendet die PSN ID aus.'
                    },
                    {
                        'name': 'Steam',
                        'key': 'option.profile.filter.steam',
                        'toggle': true,
                        'desc': 'Blendet den Steam-Namen aus.'
                    },
                    {
                        'name': 'Origin',
                        'key': 'option.profile.filter.origin',
                        'toggle': true,
                        'desc': 'Blendet den Origin-Namen aus.'
                    },
                    {
                        'name': 'Website',
                        'key': 'option.profile.filter.website',
                        'toggle': true,
                        'desc': 'Blendet die Website aus.'
                    },
                    {
                        'name': 'ICQ',
                        'key': 'option.profile.filter.icq',
                        'toggle': true,
                        'desc': 'Blendet die Nummer des ICQ-Accounts aus.'
                    },
                    {
                        'name': 'Windows Live',
                        'key': 'option.profile.filter.msn',
                        'toggle': true,
                        'desc': 'Blendet den Windows Live Messenger Namen aus.'
                    },
                    {
                        'name': 'Skype',
                        'key': 'option.profile.filter.skype',
                        'toggle': true,
                        'desc': 'Blendet den Skype-Namen aus.'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Tastaturnavigation',
        'key': 'keyboardnav',
        'categories': [
            {
                'name': false,
                'options': [
                    {
                        'name': 'Vorheriger Post',
                        'key': 'option.keyboard.post.prev',
                        'keyboard': true,
                        'desc': 'Belege eine Taste mit der Funktion "Zum vorherigen Beitrag scrollen".'
                    },
                    {
                        'name': 'Nächster Post',
                        'key': 'option.keyboard.post.next',
                        'keyboard': true,
                        'desc': 'Belege eine Taste mit der Funktion "Zum nächsten Beitrag scrollen".'
                    },
                    {
                        'name': 'Vorherige Seite',
                        'key': 'option.keyboard.page.prev',
                        'keyboard': true,
                        'desc': 'Belege eine Taste mit der Funktion "Zur vorherigen Seite scrollen".'
                    },
                    {
                        'name': 'Nächste Seite',
                        'key': 'option.keyboard.page.next',
                        'keyboard': true,
                        'desc': 'Belege eine Taste mit der Funktion "Zur nächsten Seite scrollen".'
                    }
                ]
            }
        ]
    }
];