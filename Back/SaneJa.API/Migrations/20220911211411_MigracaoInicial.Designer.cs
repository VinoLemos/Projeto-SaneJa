﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Projeto_SaneJa.Context;

#nullable disable

namespace Projeto_SaneJa.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220911211411_MigracaoInicial")]
    partial class MigracaoInicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Projeto_SaneJa.Models.AgenteDeSaneamento", b =>
                {
                    b.Property<int>("Matricula")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<long>("Cpf")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<string>("Rg")
                        .IsRequired()
                        .HasMaxLength(9)
                        .HasColumnType("varchar(9)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Telefone")
                        .HasColumnType("int");

                    b.HasKey("Matricula");

                    b.ToTable("Agentes");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.Cliente", b =>
                {
                    b.Property<long>("Cpf")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<string>("Rg")
                        .IsRequired()
                        .HasMaxLength(9)
                        .HasColumnType("varchar(9)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Telefone")
                        .HasColumnType("int");

                    b.HasKey("Cpf");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.Imovel", b =>
                {
                    b.Property<int>("Rgi")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Cep")
                        .HasColumnType("int");

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("varchar(30)");

                    b.Property<string>("Complemento")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<int>("Hidrometro")
                        .HasColumnType("int");

                    b.Property<int>("Numero")
                        .HasColumnType("int");

                    b.Property<long?>("ProprietarioCpf")
                        .HasColumnType("bigint");

                    b.Property<string>("Rua")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.HasKey("Rgi");

                    b.HasIndex("ProprietarioCpf");

                    b.ToTable("Imoveis");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.VisitaTecnica", b =>
                {
                    b.Property<int>("CodigoVisita")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AgenteMatricula")
                        .HasColumnType("int");

                    b.Property<DateTime>("DataHomologacao")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataRetorno")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataSolicitacao")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataVisita")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("Homologacao")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("ImovelRgi")
                        .HasColumnType("int");

                    b.Property<string>("Observacao")
                        .HasColumnType("longtext");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("CodigoVisita");

                    b.HasIndex("AgenteMatricula");

                    b.HasIndex("ImovelRgi");

                    b.ToTable("Visitas");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.Imovel", b =>
                {
                    b.HasOne("Projeto_SaneJa.Models.Cliente", "Proprietario")
                        .WithMany("Imoveis")
                        .HasForeignKey("ProprietarioCpf");

                    b.Navigation("Proprietario");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.VisitaTecnica", b =>
                {
                    b.HasOne("Projeto_SaneJa.Models.AgenteDeSaneamento", "Agente")
                        .WithMany()
                        .HasForeignKey("AgenteMatricula")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Projeto_SaneJa.Models.Imovel", "Imovel")
                        .WithMany()
                        .HasForeignKey("ImovelRgi")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Agente");

                    b.Navigation("Imovel");
                });

            modelBuilder.Entity("Projeto_SaneJa.Models.Cliente", b =>
                {
                    b.Navigation("Imoveis");
                });
#pragma warning restore 612, 618
        }
    }
}