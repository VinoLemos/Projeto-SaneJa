using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Projeto_SaneJa.Migrations
{
    public partial class AtualizadoVisitaTecnicacs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Agentes_AgenteMatricula",
                table: "Visitas");

            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Imoveis_ImovelRgi",
                table: "Visitas");

            migrationBuilder.DropIndex(
                name: "IX_Visitas_AgenteMatricula",
                table: "Visitas");

            migrationBuilder.DropIndex(
                name: "IX_Visitas_ImovelRgi",
                table: "Visitas");

            migrationBuilder.DropColumn(
                name: "AgenteMatricula",
                table: "Visitas");

            migrationBuilder.DropColumn(
                name: "ImovelRgi",
                table: "Visitas");

            migrationBuilder.AddColumn<int>(
                name: "cpfProprietario",
                table: "Visitas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "matriculaAgente",
                table: "Visitas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "rgiImovel",
                table: "Visitas",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cpfProprietario",
                table: "Visitas");

            migrationBuilder.DropColumn(
                name: "matriculaAgente",
                table: "Visitas");

            migrationBuilder.DropColumn(
                name: "rgiImovel",
                table: "Visitas");

            migrationBuilder.AddColumn<int>(
                name: "AgenteMatricula",
                table: "Visitas",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ImovelRgi",
                table: "Visitas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Visitas_AgenteMatricula",
                table: "Visitas",
                column: "AgenteMatricula");

            migrationBuilder.CreateIndex(
                name: "IX_Visitas_ImovelRgi",
                table: "Visitas",
                column: "ImovelRgi");

            migrationBuilder.AddForeignKey(
                name: "FK_Visitas_Agentes_AgenteMatricula",
                table: "Visitas",
                column: "AgenteMatricula",
                principalTable: "Agentes",
                principalColumn: "Matricula");

            migrationBuilder.AddForeignKey(
                name: "FK_Visitas_Imoveis_ImovelRgi",
                table: "Visitas",
                column: "ImovelRgi",
                principalTable: "Imoveis",
                principalColumn: "Rgi");
        }
    }
}
