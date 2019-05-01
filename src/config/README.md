# Database format

File `database.js`

```
module.exports = {
  uri:
    'mongodb://user:password@host:port/database'
}

```

# Auth format

File: `auth.js`

```
module.exports = {
  secret: 'secret',
  ttl: time
}

```

# Mail format

File: `mail.js`

```
module.exports = {
  host: '',
  port: '',
  secure: false,
  auth: {
    user: '',
    pass: ''
  }
}

```

# Redis format

File: `redis.js`

```
module.exports = {
  host: '',
  port: port
}

```

# Sentry format

File: `sentry.js`

```
module.exports = {
  dsn: ''
}

```
