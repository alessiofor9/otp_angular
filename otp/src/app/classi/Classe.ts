export class Utente
{
  constructor(
    public id_utente ?: number,
    public mail ?: string,
    public hex_id ?: string,
    public qrCode ?: string,
    public secret ?: string   
  )  {  }
}

export class IdPc
{
  constructor(
    public id ?: number,
    public mail ?: string,
    public password ?: string
  )  {  }
}