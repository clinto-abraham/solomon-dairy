import { Outlet } from "react-router-dom";

export default function Third() {
  return (
    <div className="container mx-auto px-3">
      <h2 className="text-4xl mb-6 font-bold text-center">
        Third Temple History
      </h2>
      <p className="max-w-xs mx-auto text-white md:max-w-lg md:text-left">
        The world was born in Jerusalem. When G-d ‘took the Land out of the
        water through the Foundation Stone located in Mt. Moriah. On this
        mountain, which spans 760 meters tall, is the Foundation Stone,Even
        Ashtia in Hebrew. On this stone, Adam was exiled from the Garden of
        Eden, Abraham sacrificed the ram instead of his son Isaac, Jacob creamed
        about 4 angels ascending and descending Heavens. In the 11th century
        BCE, the Vulgar Era, King David purchased this plot of land from Araunah
        for 50 shekels of gold, 400 years after the children of Israel entered
        the Promised Land. King Solomon, son of King David, placed the Ark of
        the Covenant which housed the Ten Commandments, Aaron’s staff, food
        (manna) that miraculously fell from the heavens in the desert and the
        Ten Commandments on which Moses recorded the writing of G-d in Sinai, on
        the Foundation Stone. King Solomon built the First Temple in 966 BCE,
        the Vulgar Era. The Temple was the prayer house for all nations.
        Everyone had a specific role – the priests (Kohanim) , the assistants
        (Levi), the nation of Israel, the nations, men and women met at the
        house of G-d to pray to Him, to sing to Him and to make animal and grain
        sacrifices. In light of the bad behavior of the Nation of Israel
        (idolatry, poor morals, lack of respect for the property of others,
        theft), G0d allowed the Babylonian King Nebuchadnezzar to destroy the
        Temple in 586 BCE. Following 70 years in exile in Babylonia (current
        Iraq), and with the approval of the King of Persia (current Iran) Cyrus,
        the children of Israel returned to Israel, where they built the Second
        Temple on the same site in 516 BCE, under the leadership of Prophets
        Ezra (458 BCE) and Nechemia (445 BCE). In 570 BCE, the Prophet Ezekiel
        experienced a concrete vision of the future Temple of Jerusalem, the
        Third Temple, even before the Second Temple was built. In Chapters
        26-40, Ezekiel detailed in his prophecy the exact dimensions of the
        Third Temple. The Second Temple in Jerusalem existed from 417 BCE and
        until 70 ACE. During that time, Jerusalem had been controlled by the
        Persians, Greeks and Romans. In 70 ACE, G-d allowed Titus to destroy the
        Second Temple. The children of Israel were focused on hatred of each
        other. The children of Israel were exiled to all countries around the
        world without being able to live in the Land of Israel. For almost 2000
        years, the Nation of Israel prayed for the building of the Temple during
        all these generations . Without losing hope, despite the persecutions,
        pogroms, Inquisition, the Holocaust, the discrimination, the
        degradation, the right to perform the stringent commandments of the
        Torah, the nation of Israel successfully preserved the desire to restore
        Jerusalem.
      </p>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
