# FROM [image:tag]
FROM python:3.12-slim

# now everything will be dumped inside the containers app folder (sets the working directory)
WORKDIR /app 

# COPY [source] [destination]
COPY . .

# default command to run
CMD ["python", "app.py"]