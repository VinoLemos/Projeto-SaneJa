using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Projeto_SaneJa.Migrations
{
    public partial class AzureTeste : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Agentes_AgenteMatricula",
                table: "Visitas");

            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Imoveis_ImovelRgi",
                table: "Visitas");

            migrationBuilder.AlterColumn<int>(
                name: "ImovelRgi",
                table: "Visitas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "AgenteMatricula",
                table: "Visitas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<long>(
                name: "CpfProprietario",
                table: "Imoveis",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Agentes_AgenteMatricula",
                table: "Visitas");

            migrationBuilder.DropForeignKey(
                name: "FK_Visitas_Imoveis_ImovelRgi",
                table: "Visitas");

            migrationBuilder.DropColumn(
                name: "CpfProprietario",
                table: "Imoveis");

            migrationBuilder.AlterColumn<int>(
                name: "ImovelRgi",
                table: "Visitas",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AgenteMatricula",
                table: "Visitas",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Visitas_Agentes_AgenteMatricula",
                table: "Visitas",
                column: "AgenteMatricula",
                principalTable: "Agentes",
                principalColumn: "Matricula",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Visitas_Imoveis_ImovelRgi",
                table: "Visitas",
                column: "ImovelRgi",
                principalTable: "Imoveis",
                principalColumn: "Rgi",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
