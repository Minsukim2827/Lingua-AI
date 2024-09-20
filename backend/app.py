from flask import Flask, jsonify
import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_supabase_client():
    url: str = os.environ.get("SUPABASE_URL")
    key: str = os.environ.get("SUPABASE_KEY")
    if not url or not key:
        raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set")
    supabase: Client = create_client(url, key)
    return supabase

app = Flask(__name__)
supabase = create_supabase_client()

@app.route('/')
def index():
    return jsonify({'message': 'Hello, World!'})

# Additional routes can be added here

if __name__ == '__main__':
    app.run(debug=True)
