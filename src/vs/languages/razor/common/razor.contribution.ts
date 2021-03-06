/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import modesExtensions = require('vs/editor/common/modes/modesRegistry');

modesExtensions.registerMode({
	id: 'razor',
	extensions: ['.cshtml'],
	aliases: ['Razor', 'razor'],
	mimetypes: ['text/x-cshtml'],
	moduleId: 'vs/languages/razor/common/razor',
	ctorName: 'RAZORMode'
});
