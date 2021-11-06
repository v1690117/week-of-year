# Week of the year

Service showing current week of the year.  
It is published here [week-of-year](https://v1690117.com/week-of-year/?prefix=Current%20week%20is%20&postfix=!&fontSize=6vw).

# Configuration

Service accepts the next URL parameters:

- prefix (optional) - text to be shown in front of the week number
- postfix (optional)- text to be shown behind the week number
- fontSize (optional) - size of the text in css format, `3rem` is default value.
- mode (optional):
  - current (**default**) - 
  - countdown - number of weeks to defined date (with param targetDate)
- targetDate (optional) - date to build countdown

## Development

The next software is required to run the app:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

1.  Clone the repository

```bash
git clone git@github.com:v1690117/week-of-year.git
```

2. Go into cloned folder

```bash
cd week-of-year
```

3.  Install dependencies

```bash
npm install
```

4.  Run server

```bash
npm run start
```

5. Check in [http://localhost:3000/](http://localhost:3000/)

## Docker
To build image run
```bash
docker build . -t v1690117/week-of-year
```

To run container
```bash
docker run -d -p 3000:3000 v1690117/week-of-year
```

## Contribution

Feel free to register an issue or create a pull request.
