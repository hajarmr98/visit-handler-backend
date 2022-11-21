# Visit Handler Backend



## Endpoints

- [admin](#admin)
- [visitor](#visitor)


### Datos disponibles

- `{admin}`: Admin1, Admin2

### **admin**

- **POST `/admin/login`**

  Cuerpo de la petición:

  ```json
  { 
    "usernameOrEmail": string, 
    "password": string

  }
  ```

- **POST `/admin/createAdmins`**

- **GET `/admin/visits`**

  Cuerpo de la respuesta:

  ```json
  {
    "id": number,
    "date": string,
    "visitor_identification": string,
    "startup": string,
    "visitor_name": string,
    "petitioner_name": string,
    "petitioner_email": string,
    "status": number,
    "createdAt": string,
    "updatedAt": string,
    "admin_id": null
  }
  ```
- **PUT `/admin/visits/:id`**

  1. `id` llega como param, siendo el id de la visita

- **DELETE `/admin/visits/:id`**

  1. `id` llega como param, siendo el id de la visita

### **visitor**

- **POST `/visitor/form`**

  Cuerpo de la respuesta:

  ```json
  {
    "date": string,
    "visitor_identification": string,
    "startup": string,
    "visitor_name": string,
    "petitioner_name": string,
    "petitioner_email": string
  }
  ```