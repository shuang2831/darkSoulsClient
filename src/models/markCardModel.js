export default function MarkCard(
  {
    MessageId = null,
    Message = null,
    UserId = null,
    Latitude = null,
    Longitude = null
  } = {}
) {
  return {
    MessageId,
    Message,
    UserId,
    Latitude,
    Longitude
  };
}
