using RDB.Bindery.Models;
using Orchard.ContentManagement;
using Orchard.ContentManagement.Handlers;
using Orchard.Localization;

namespace RDB.Bindery.Handlers
{
    public class BinderyThemeSettingsPartHandler : ContentHandler
    {
        public BinderyThemeSettingsPartHandler() 
        {
            T = NullLocalizer.Instance;

            Filters.Add(new ActivatingFilter<BinderyThemeSettingsPart>("Site"));
            Filters.Add(new TemplateFilterForPart<BinderyThemeSettingsPart>("BinderyThemeSettingsPart", "Parts/BinderyThemeSettings", "RDB.Bindery"));
        }

        public Localizer T { get; set; }

        protected override void GetItemMetadata(GetContentItemMetadataContext context) 
        {
            if (context.ContentItem.ContentType != "Site") return;

            var groupInfo = new GroupInfo(T("Bindery Settings"));
            groupInfo.Id = "RDB.Bindery";

            base.GetItemMetadata(context);
            context.Metadata.EditorGroupInfo.Add(groupInfo);
        }
    }
}