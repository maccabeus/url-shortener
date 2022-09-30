db.createUser({
    user: 'shortener',
    pwd: 'tonybidemi85',
    roles: [
        {
            role: 'readWrite',
            db: 'shortener',
        },
    ],
});