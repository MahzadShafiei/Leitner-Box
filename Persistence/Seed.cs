using Domain;
using static Persistence.Enum.WordStatus;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Words.Any()) return;

            var activities = new List<Word>
            {
                new Word
                {
                    Name="keen",
                    Value="تیز، مشتاق، مایل",
                    status=Status.Level1,
                },
                new Word
                {
                    Name="evenly",
                    Value="بطور مساوی",
                    status=Status.Level1,
                }                
            };

            await context.Words.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}