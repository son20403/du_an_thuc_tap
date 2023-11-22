<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $details['title'] }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }

        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333333;
        }

        p {
            color: #555555;
        }
    </style>
</head>
<body>
    <div class="container">
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
      <div style="width: 100%; background-color: #FFA500; padding: 20px 0">
      <a href="" ><img
          src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"
          style="width: 100%; height: 70px; object-fit: contain"
        /></a>

      </div>
      <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
        <h1>{{ $details['title'] }}</h1>
        </p>
        <div style="font-size: .8rem; margin: 0 30px">
        <p>{{ $details['body'] }}</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
