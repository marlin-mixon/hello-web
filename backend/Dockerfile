FROM python:3.11-slim

WORKDIR /app

RUN pip install --no-cache-dir fastapi uvicorn

COPY ./main.py /app/main.py

# Changed --port from 8000 to 8766
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8766"]