using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Projeto_SaneJa.Migrations
{
    public partial class MigracaoInicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Agentes",
                columns: table => new
                {
                    Matricula = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Rg = table.Column<string>(type: "varchar(9)", maxLength: 9, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Cpf = table.Column<long>(type: "bigint", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Telefone = table.Column<int>(type: "int", nullable: false),
                    Login = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Senha = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agentes", x => x.Matricula);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Cpf = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Rg = table.Column<string>(type: "varchar(9)", maxLength: 9, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DataNascimento = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Telefone = table.Column<int>(type: "int", nullable: false),
                    Login = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Senha = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Cpf);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Imoveis",
                columns: table => new
                {
                    Rgi = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Rua = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Numero = table.Column<int>(type: "int", nullable: false),
                    Complemento = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Bairro = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Cep = table.Column<int>(type: "int", nullable: false),
                    Cidade = table.Column<string>(type: "varchar(30)", maxLength: 30, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Hidrometro = table.Column<int>(type: "int", nullable: false),
                    ProprietarioCpf = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imoveis", x => x.Rgi);
                    table.ForeignKey(
                        name: "FK_Imoveis_Clientes_ProprietarioCpf",
                        column: x => x.ProprietarioCpf,
                        principalTable: "Clientes",
                        principalColumn: "Cpf");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Visitas",
                columns: table => new
                {
                    CodigoVisita = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ImovelRgi = table.Column<int>(type: "int", nullable: false),
                    AgenteMatricula = table.Column<int>(type: "int", nullable: false),
                    DataSolicitacao = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DataVisita = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DataRetorno = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DataHomologacao = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Homologacao = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Observacao = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visitas", x => x.CodigoVisita);
                    table.ForeignKey(
                        name: "FK_Visitas_Agentes_AgenteMatricula",
                        column: x => x.AgenteMatricula,
                        principalTable: "Agentes",
                        principalColumn: "Matricula",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Visitas_Imoveis_ImovelRgi",
                        column: x => x.ImovelRgi,
                        principalTable: "Imoveis",
                        principalColumn: "Rgi",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Imoveis_ProprietarioCpf",
                table: "Imoveis",
                column: "ProprietarioCpf");

            migrationBuilder.CreateIndex(
                name: "IX_Visitas_AgenteMatricula",
                table: "Visitas",
                column: "AgenteMatricula");

            migrationBuilder.CreateIndex(
                name: "IX_Visitas_ImovelRgi",
                table: "Visitas",
                column: "ImovelRgi");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Visitas");

            migrationBuilder.DropTable(
                name: "Agentes");

            migrationBuilder.DropTable(
                name: "Imoveis");

            migrationBuilder.DropTable(
                name: "Clientes");
        }
    }
}
