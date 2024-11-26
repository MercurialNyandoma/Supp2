<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            color: var(--tg-theme-text-color);
            background: var(--tg-theme-bg-color);
        }

        .Main {
            width: 100%;
            padding: 25px;
            text-align: center;

        }

        h1 {
            margin-top: 40px;
            margin-bottom: 10px;
        }

        img {
            width: 70px;
            margin: 30px auto;
        }

        .btn {
            border: 0;
            border-radius: 5px;
            margin-top: 50px;
            height: 60px;
            width: 200px;
            font-style: 20px;
            font-weight: 500;
            cursor: pointer;
            color: var(--tg-theme-button-text-color);
            background: var(--tg-theme-button-color);
        }
        
    </style>
</head>
<body>
    <div class="Main">
        <h1>Добро Пожаловать!</h1>
        <img src="{{ url_for('static', filename='bot.png') }}" alt="123">
        <p></p>
        <button class="btn">Подключить Аккаунт</button>
    </div>

    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</body>
</html>
