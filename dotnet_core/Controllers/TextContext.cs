using System;
using Microsoft.EntityFrameworkCore;
using product_group.Models;
using System.ComponentModel.DataAnnotations;

namespace product_group{

    public class TextContext:DbContext{

        public TextContext(DbContextOptions<TextContext> options): base(options){}

        public DbSet<TextArea> TextArea{get;set;}
    }
}