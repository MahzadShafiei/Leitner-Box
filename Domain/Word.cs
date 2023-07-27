using static Persistence.Enum.WordStatus;

namespace Domain
{
    public class Word
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Value { get; set; }
        public Status status { get; set; }

    }
}
