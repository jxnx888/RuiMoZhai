<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="XinNing.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Home::Xin Ning</title>

    <div class="home_banner">
      <section id="main-slider" class="no-margin">
         <div class="carousel slide">
            <div class="carousel-inner">
               <div class="item active">
                  <div class="container">
                     <div class="row slide-margin">
                        <div class="carousel-content">
                           <h1 class="animation animated-item-1">Xin Ning</h1>
                           <p class="animation animated-item-2">Web Developer</p>
                           <p class="animation animated-item-3" >Sortware Engineer</p>
                           <a class="btn btn-social-icon btn-linkedin animation animated-item-4" href="https://www.linkedin.com/in/xin-ning-28818b115/" target="_blank"><span class="fa fa-linkedin"></span></a>
                           <a class="btn btn-social-icon btn-facebook animation animated-item-4" href="https://www.facebook.com/jxnx888" target="_blank"><span class="fa fa-facebook"></span></a> 
                           <!--    <a class="btn btn-social-icon btn-google animation animated-item-4" href="" target="_blank"><span class="fa fa-google"></span></a> -->
                           <a class="btn btn-social-icon btn-github animation animated-item-4" href="https://github.com/jxnx888/" target="_blank"><i class="fa fa-github"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <!--/.item-->             
            </div>
            <!--/.carousel-inner-->
         </div>
         <!--/.carousel-->
      </section>
      <!--/#main-slider-->
   </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <div class="row">
      <div class="col-md-4">
         <h3 class="break_line content">Welcome</h3>
         <p>You’ve found yourself at the online home of Xin Ning, a Web Developer & Software Engineer. Here you’ll find a selection of my latest work, stats about my skills 
            and a link to my  <a href="Files/XINNING-Resume.pdf" target="_blank" style="color:blue;">resume</a> and <a href="Files/XinNing-CoverLetter-WEB.pdf" target="_blank" style="color:blue;">Cover Letter </a> (pdf).
         </p>
         <p>
            If you have a project or need some extra help, please drop me an email at <a href="mailto:ningxin1989@hotmail.com" style="color:blue;">ningxin1989@hotmail.com</a>, 
            alternatively you can fill out my contact form in the <a href="Contact.aspx" style="color:blue;">Contact</a> page .
         </p>
      </div>
      <div class="col-md-4">
         <h3 class="break_line">Personal Statement</h3>
         <p>An all-round web aficionado with 2 years of freelance experience who is always looking to work on exciting projects with exciting clients. Full of energy, 
            experience, hard work and enthusiasm.
         </p>
         <p>
            A whizz at HTML5, CSS, Asp.Net, JavaScript, C#, MySQL, Java, and more... Currently learning C# and PHP.
         </p>
         <p style="color:#337ab7">
            Expecting love, laughter, sweat... and plenty of tea.
         </p>
      </div>
      <div class="col-md-4">
         <h3 class="break_line">About Me</h3>
         <p>
            Currently, I am a Masters student in the Software Engineering program at Fairfield University. 
            This past summer I worked at Mack Media Group as a web designer. I had focused on
            responsive websites using CSS and developed the websites with WordPress and used Photoshop
            to design and modify images.
         </p>
      </div>
   </div>
</asp:Content>
