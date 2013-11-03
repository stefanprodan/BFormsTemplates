using System.Web;
using System.Web.Optimization;

namespace WebApplication
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/BForms")
                //BForms CSS bundle
                .Include("~/Scripts/BForms/Bundles/css/*.css", new CssRewriteUrlTransform())
                //Site CSS bundle
                .Include("~/Content/StyleSheets/*.css", new CssRewriteUrlTransform())
                );
        }
    }
}
