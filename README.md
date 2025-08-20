# Koperasi-App

## 🚀 Instruksi Setup

### Backend Setup
- Buat Folder dengan nama apapun terus masuk ke folder tersebut
- Lalu clone repository git clone https://github.com/hafizmaulanaazhar/Koperasi-App.git

##Install Dependencies
  1. cd koperasi-backend
  2. composer install
  3. copy .env.example .env
     - Ubah DB_CONNECTION = mysql
     - ubah nama DB_DATABASE=koperasi-app
  4. php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
  5. php artisan key:generate
  6. php artisan migrate(jika tidak bisa gunakan php artisan migrate:fresh)
  7. php artisan db:seed --class=UserSeeder
  8. php artisan serve

### Frontend Setup
1. cd koperasi-frontend
2. npm install
   - Jika terdapat error, hapus folder node_modules lalu npm install kembali
3. npm run dev

Login Credentials
- Admin: admin@koperasi.com / password
- Karyawan: karyawan@koperasi.com / password
