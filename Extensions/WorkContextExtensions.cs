using System.Linq;
using Orchard;
using Orchard.Environment.Descriptor.Models;

namespace RDB.Bindery.Extensions
{
    public static class WorkContextExtensions
    {
        public static bool IsFeatureEnabled(this WorkContext workContext, string featureName) 
        {
            return workContext.Resolve<ShellDescriptor>().Features.Any(x => x.Name == featureName);
        }
    }
}