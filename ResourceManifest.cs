using Orchard.UI.Resources;

namespace RDB.Bindery
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest.DefineStyle("RDB.Bindery.Styles").SetUrl("Site.min.css", "Site.css");
            manifest.DefineStyle("RDB.Bindery.Styles.Rtl").SetUrl("Rtl.min.css", "Rtl.css");

            manifest.DefineScript("RDB.Bindery.Scripts").SetUrl("Site.min.js", "Site.js");
        }
    }
}