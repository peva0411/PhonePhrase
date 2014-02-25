using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PhonePhrase.Startup))]
namespace PhonePhrase
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
