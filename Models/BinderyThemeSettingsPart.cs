using System.Collections.Generic;
using System.Web.Mvc;
using Orchard.ContentManagement;
using Orchard.Localization;

namespace RDB.Bindery.Models
{
    public class BinderyThemeSettingsPart : ContentPart 
    {
        public BinderyThemeSettingsPart() 
        {
            T = NullLocalizer.Instance;

            _colorSchemes = new List<SelectListItem> {
                new SelectListItem {
                    Text = T("Default").Text,
                    Value = "Default"
                },
                new SelectListItem {
                    Text = T("Black").Text,
                    Value = "Black"
                },
                new SelectListItem {
                    Text = T("Blue").Text,
                    Value = "Blue"
                },
                new SelectListItem {
                    Text = T("Green").Text,
                    Value = "Green"
                },
                new SelectListItem {
                    Text = T("Grey").Text,
                    Value = "Grey"
                },
                new SelectListItem {
                    Text = T("White").Text,
                    Value = "White"
                }
            };    
        }

        public Localizer T { get; set; }

        private readonly IEnumerable<SelectListItem> _colorSchemes;

        public string SelectedColorScheme
        {
            get { return this.Retrieve(x => x.SelectedColorScheme) ?? "Default"; }
            set { this.Store(x => x.SelectedColorScheme, value); }
        }

        public IEnumerable<SelectListItem> ColorSchemes
        {
            get { return _colorSchemes; }
        }
    }
}