using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaCamisa.Models
{
    public class Cliente
    {

        private string  nome, email, logradouro, cep, cidade, complemento, telefone, estado;
        private int cpf,senha;
        const string conString = "Server=ESN509VMYSQL;Database=bd_projeto_camisa;User id=aluno;Password=Senai1234";

        public int Cpf { get => cpf; set => cpf = value; }
        public string Nome { get => nome; set => nome = value; }
        public string Telefone { get => telefone; set => telefone = value; }
        public string Complemento { get => complemento; set => complemento = value; }
        public string Email { get => email; set => email = value; }
        public int Senha { get => senha; set => senha = value; }
        public string Logradouro { get => logradouro; set => logradouro = value; }     
        public string Cep { get => cep; set => cep = value; }
        public string Cidade { get => cidade; set => cidade = value; }
        public string Estado { get => estado; set => estado = value; }
      

        public string Cadastrar() {
            MySqlConnection con = new MySqlConnection(conString);

            try {
                con.Open();

                MySqlCommand query = new MySqlCommand(
                    "INSERT INTO CLIENTE(estado,cidade,logradouro,complemento,cep,senha,cpf,email,telefone,nome) VALUES (@estado,@cidade,@logradouro,@complemento, @cep,@senha, @cpf , @email, @telefone,@nome)", con);
                query.Parameters.AddWithValue("@estado", estado);
                query.Parameters.AddWithValue("@cidade", cidade);
                query.Parameters.AddWithValue("@logradouro", logradouro);
                query.Parameters.AddWithValue("@complemento", complemento);
                query.Parameters.AddWithValue("@cep", cep);
                query.Parameters.AddWithValue("@senha", senha);
                query.Parameters.AddWithValue("@cpf", cpf);
                query.Parameters.AddWithValue("@email", email);
                query.Parameters.AddWithValue("@telefone", telefone);
                query.Parameters.AddWithValue("@nome", nome);

                query.ExecuteNonQuery();
                con.Close();
                return "Foi";

            } catch (Exception ex) {
                return ex.Message;
            }
        }

        public Boolean Logar() {
            MySqlConnection con = new MySqlConnection(conString);

            try {
                con.Open();

                MySqlCommand query = new MySqlCommand("select cpf, senha, nome, email from CLIENTE where email=@email;", con);
                query.Parameters.AddWithValue("@email", email);
                //query.Parameters.AddWithValue("@senha", senha);
                MySqlDataReader reader = query.ExecuteReader();

                if (reader.Read() == false) {
                    con.Close();
                    return false;
                }


                Nome = reader.GetString("nome");
                Email = reader.GetString("email");
              

                if (!Senha.Equals(senha)) {
                    con.Close();
                    return false;
                }

                con.Close();
                return true;
            } catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public string Excluir() {

            MySqlConnection con = new MySqlConnection(
                conString);

            try {
                con.Open();

                MySqlCommand query = new MySqlCommand("DELETE FROM CLIENTE WHERE cpf = @cpf", con);
                query.Parameters.AddWithValue("@cpf", cpf);

                query.ExecuteNonQuery();

                con.Close();

                return "Excluido com sucesso!";
            } catch (Exception ex) {
                return ex.Message;
            }
        }

    }
}
