using CopaCamisa.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaCamisa.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index() {
            return View();
        }

         [HttpPost]
         public IActionResult Salvar(int cpf, string nome, string email, int senha, string complemento, string logradouro, string cep, string cidade, string telefone,string estado)
         {
                Cliente clientes = new Cliente();

            clientes.Estado = estado;
            clientes.Cidade = cidade;
            clientes.Logradouro = logradouro;
            clientes.Complemento = complemento;
            clientes.Cep = cep;
            clientes.Senha = senha;
            clientes.Cpf = cpf;
            clientes.Email = email;
            clientes.Telefone = telefone;
            clientes.Nome = nome;
                 

                clientes.Cadastrar();

                TempData["Nome"] = clientes.Nome;
                TempData["Email"] = clientes.Email;

                return RedirectToAction("Index", "Home");
         }

        public IActionResult Entrar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Logar(string email, int senha)
        {
            Cliente cliente = new Cliente();

            cliente.Email = email;
            cliente.Senha = senha;

            if (!cliente.Logar()) 
                return RedirectToAction("Entrar", "Login");

            TempData["Nome"] = cliente.Nome;
            TempData["Email"] = cliente.Email;

            return RedirectToAction("Index","Home");
        }

        [HttpPost]
        public IActionResult Deslogar(int cpf)
        {
            Cliente cliente = new Cliente();

            cliente.Cpf = cpf;

            cliente.Excluir();

            return RedirectToAction("Index", "Home");
        }

    }
}
