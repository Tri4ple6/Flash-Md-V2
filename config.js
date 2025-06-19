require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '254742063632',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RPcXJ5MFphR3ZrWU5kSStnTXI5Nzc1YVRobVNsRE41TEV5dmlQQi8wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjBISGtmZkhxbGg5OSszQ01ZZGNjcW5RNGMrZUQ5WlFnMDJ6T3E4SVRSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTEphcVFIWTZsMVBQTWxuM01lUWx1bFBKQlFYRlNjNFkrVzVrdThRVTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwa0ZWOXdSUi9Ea21pYzRZZ01EUWVUTjNSYWJBRmUvTnkweHEwajIrSzFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PdTRLcFMybUd3aVJFNXJjUUhYUUZ1U1hYNkRocEppQ2d4NnFRZzhvMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY3TUtVVEVoWDJxN1BzN2ZtanZQVW1mU040b1VWK2VMZmpOanZrVTB2MVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhtNlo4L1QwdUFCdXZsOGFEQzRyam9aaEpoMVpZaWV6UmtwWUpyTkpHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG9SRU9jcDBmY0c1TktnSjJiTEJkOEhEVHA5K0ZjTFlYc3FYNldpT0FGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR3OGUwWkxheFl5VG9qVGtEdXI5bVNaZGlQY0psUTUwclBzeGdxVEZZdWowTW5taUIzaWM2akgyWkRmc0ZMZXZvUHJ0RTAvMlBZNXM4ZU5FdmY2NUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IjZjdXVlWDNqYWYxS3k2YzlTcHI0MHdYTlJRODF2Vnk2Tzc1TjBOQnhLcDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlZQUkRYRUhIIiwibWUiOnsiaWQiOiIyNTQ3MDE3NjQxNzI6MTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTg5MzU3ODQ5MzU2NDM6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMK20wNTBCRUlqVzBjSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMaG9qQ21ENUh5YkwyYnM3ODN3SzluSGNaMldhcXk2b0w4TTFEYU5VWW1BPSIsImFjY291bnRTaWduYXR1cmUiOiJUVS9rcUtWSHNOUVovTWIxVm5LUXVnemx0SkcvQlViRXhNTHFTZTBVR2Z1OFY2eERFTkM2STRrSXZ2Vlh3QXBrcU55MW11Mkh0UzdnM2hrRlA0MFZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWEJteldZa05RYUJFNS96bzIvY2taRFp0VnVhdnlCVDNGeHFmL2J1RkRZeEE1Q2RSV0orUGttcVdqdGVBU0VJT3ZKVHl5Rmc5dWF0U2JSQnljOTZRQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDE3NjQxNzI6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzRhSXdwZytSOG15OW03Ty9OOEN2WngzR2RsbXFzdXFDL0ROUTJqVkdKZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzYyOTAzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhNaCJ9',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
