FROM python:3.12-slim

LABEL author="Sagar"
LABEL project="python-app"

WORKDIR /app

COPY requirement.txt .

RUN pip install --no-cache-dir -r requirement.txt

COPY . .

CMD ["python", "app.py"]