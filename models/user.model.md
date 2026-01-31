create table users(id uuid primary key ,name text not null,email text unique not null,password text not null,role text check(role in ('owner','driver','customer')) not null,created_at timestamp default now())

This is the query used for users table creation.Stores all users of the system.Each user has exactly one role.