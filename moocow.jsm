/* -*- Mode: JavaScript; tab-width: 4 -*- vim:tabstop=4 syntax=javascript:
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is aucg's JS IRC bot.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   David Vo, David.Vo2@gmail.com, original author
 *   Michael, oldiesmann@oldiesmann.us, bug finder!
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK *****
 */

module.version = "0.2 (21 Jan 2011)";
module.onMsg =
function onMsg(dest, msg, nick, host, at, serv)
{	if (/hamburger|beef/i.test(msg) && !/^au/.test(nick))
		aucgbot.msg(dest, "\1ACTION eats", nick + "\1");
	else if (/moo|cow/i.test(msg))
	{	s =
		[	"Mooooooooooo!", "MOO!", "Moo.", "Moo. Moo.", "Moo Moo Moo, Moo Moo.", "fish go m00!",
			"\1ACTION nibbles on some grass\1",
			"\1ACTION goes and gets a drink\1",
			"\1ACTION looks in the " + dest + " fridge\1",
			"\1ACTION quietly meditates on the purpose of " + dest + "\1",
			"\1ACTION races across the channel\1",
			"\1ACTION runs around in circles and falls over\1",
			"\1ACTION wanders aimlessly\1",
			"\1ACTION eyes " + nick + " menacingly\1",
			"\1ACTION sniffs " + nick + "\1",
			"\1ACTION thumps " + nick + "\1",
			"\1ACTION solves partial differential equations\1"
		];
		aucgbot.msg(dest, s[ranint(0, s.length - 1)]);
	}
}
