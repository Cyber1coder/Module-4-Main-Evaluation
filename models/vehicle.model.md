create table vehicles(id uuid primary key,name text not null,registration_number text unique not null,allowed_passengers int not null,isavailable boolean default true,rate_per_km numeric,owner_id uuid references users(id) on delete cascade,driver_id uuid references users(id),created_at timestamp default now());

This query is used to create table for vehicles.Stores vehicles created by owners