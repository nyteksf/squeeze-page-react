// WhyWeExist.jsx
import { Link } from "react-router";
import React, { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";
import ContactMeModal from "../components/ContactMeModal";

import "./why-we-exist.css";

const WhyWeExist = () => {
  const footerRef = useRef(null);

  const setIsModalAnimating = useState(false)[1];
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Track DOM content loaded
    const handleDOMContentLoaded = () => {
      // Your critical elements are ready, but maybe not images
      setIsLoading(false);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleDOMContentLoaded();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      return () =>
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
    }

    // Safety timeout - ensure loading screen disappears after a maximum time
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds max loading time

    return () => clearTimeout(safetyTimeout);
  }, []);

  const launchContactModal = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });

    // First set the animation state to true
    setIsModalAnimating(true);

    // Then open the modal
    setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <>
      <ContactMeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsModalAnimating={setIsModalAnimating}
      />
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          <div className="why-we-exist--wrapper">
            <div className="why-we-exist--txt-container">
              {/* Logo Placeholder */}
              <header className="whyweexist--logo-header">
                <Link to="/">
                  <img
                    src="/logo-sm-1.png"
                    alt="Covered Bridge Properties Logo 1"
                    className="whyweexist--main-logo"
                  />
                </Link>
              </header>

              <section className="whyweexist--hero-section">
                <h1>
                  Covered Bridge Properties: Bridging Burdens to Peace of Mind
                </h1>
              </section>

              <section className="whyweexist--content-section">
                <h2 className="whyweexist--h2">
                  When Land Becomes a Quiet Burden
                </h2>
                <p className="whyweexist--p whyweexist--quiet-burden-p1">
                  Maybe this sounds familiar: you own a piece of land which you
                  haven’t seen much of, if at all, in some time. Life took you
                  from it, and it’s just sitting there—unused and a little
                  forgotten. The property tax letters come in like clockwork,
                  but aside from that, this land isn’t a part of your daily life
                  now, if ever. You tell yourself you’ll deal with it{" "}
                  <em>“soon,”</em> but soon keeps slipping further away. And as
                  time passes, a <strong>quiet weight</strong> forms in the back
                  of your mind, getting a bit heavier each time you notice the
                  next, unopened envelope just sitting there.
                </p>
                <p className="whyweexist--p">
                  For many people in this situation, a range of feelings starts
                  to eventually creep in:
                </p>
                <ul>
                  <li>
                    <strong>Frustration:</strong> The frequent reminder of tax
                    bills or maintenance notices for a place you never visit can
                    wear on a person sooner or later in certain undeniable ways.
                  </li>
                  <li>
                    <strong>Avoidance:</strong> It feels easier to shove this
                    issue aside than to face it. Weeks turn into months, then
                    even years, without any action, as the paperwork piles up in
                    a drawer, for example.
                  </li>
                  <li>
                    <strong>Guilt:</strong> You might sense you’re neglecting
                    something important—perhaps it was a gift or an
                    inheritance—and that nagging voice says you’re letting
                    someone (maybe even yourself) down by not “taking care” of
                    it. It’s only natural, if so.
                  </li>
                </ul>
                <p className="whyweexist--p">
                  This is not a situation anyone plans for, and it can feel
                  isolating. So, if you’re nodding along to any of this in your
                  mind or physically, <strong>you’re not alone</strong>. In
                  fact, that sense of recognition—the oh, <em>this is me</em>{" "}
                  moment—is exactly why I want to share our story with you. It
                  might just{" "}
                  <strong>shine a light on a real path forward.</strong>
                </p>
              </section>

              <section
                className="whyweexist--content-section whyweexist--seed-for-change"
                data-title="Planting the Seed for Change"
              >
                <h2 className="whyweexist--h2">Planting the Seed for Change</h2>
                <p className="whyweexist--p">
                  Looking back, I’ll never forget the moment that sparked the
                  idea for Covered Bridge Properties. For me, it started in{" "}
                  <strong>my own life,</strong> with{" "}
                  <strong>my own piece of unwanted land.</strong> A few years
                  back, after a family member passed away,{" "}
                  <strong>
                    I inherited a small plot of acreage far away in the
                    countryside
                  </strong>
                  . I lived many hours away,{" "}
                  <strong>
                    wrapped up in my career, a messy relationship and overall
                    busy life
                  </strong>
                  . In all honesty,{" "}
                  <em>I hadn’t set foot on that land in years.</em> At first, I
                  told myself <strong>I’d figure it out eventually,</strong> but
                  instead I just sort of let things pile up.{" "}
                  <strong>Bills. Letters.</strong> And{" "}
                  <em>
                    that uneasy feeling of “I really should do something about
                    this”,
                  </em>{" "}
                  that I kept pushing down.
                </p>
                <p className="whyweexist--p">
                  For what felt like the longest time,{" "}
                  <strong>I coped by avoidance</strong>—I’d glance at the
                  property tax notices and tuck them away unopened, telling
                  myself <em>I’d deal with it next week.</em> That next week
                  turned into <strong>next month</strong> before I even noticed.
                  I felt <strong>ashamed</strong> of my procrastination—but
                  every time I thought about the land, I felt it rising up
                  again: that <strong>pang of guilt</strong>. This was{" "}
                  <strong>something left to me,</strong> a part of their{" "}
                  <em>life’s work,</em> and here I was,{" "}
                  <strong>ignoring it.</strong> On top of that was a lingering
                  kind of uncertainty that paralyzed me:{" "}
                  <strong>
                    realtors, listings, property liens, government officials,
                    lawyers, legal paperwork
                  </strong>
                  —it all felt like <strong>a huge mountain to climb,</strong>{" "}
                  so I kept <em>waiting</em>. <em>Hoping</em>, on some level,
                  that things would change and begin becoming easier.
                </p>
                <p className="whyweexist--p">
                  <strong>Eventually, a breaking point came.</strong> It was a
                  regular afternoon. I was sorting through the mail and found
                  yet another <strong>official-looking envelope</strong>;
                  knowing instantly what it was about. I just stared at it,{" "}
                  <strong>heavy with the realization</strong> that{" "}
                  <em>
                    nothing was going to change unless I took action, right now
                  </em>
                  . I thought about my family member who had passed. And in that
                  moment, I made a promise to myself:{" "}
                  <strong>enough was enough.</strong> I didn’t have a grand
                  plan. But I was done avoiding it. I was going to{" "}
                  <strong>finally deal with this forgotten land.</strong>
                </p>
                <p className="whyweexist--p">
                  The journey to resolve it wasn’t easy—there were{" "}
                  <strong>numerous calls</strong> to the county,{" "}
                  <strong>awkward conversations</strong> with real estate folks
                  who <strong>didn’t really specialize in vacant land</strong>,
                  and a lot of on-the-fly learning.{" "}
                  <em>It was stressful. Messy. Frustrating</em>. I stumbled
                  awkwardly through the research and preparation needed for my
                  upcoming sale. But slowly, step by step, I managed to find a
                  buyer, finished the paperwork, and{" "}
                  <strong>
                    sold that land to somebody who truly wanted it
                  </strong>
                  .<strong> The day I signed the papers,</strong> something hard
                  to express had changed. It was just like a wave of relief{" "}
                  <strong>came, flooding through me.</strong> For lack of a
                  better phrase, it felt like this knot in my stomach—finally
                  had come undone. And I could breathe easier knowing I wasn’t
                  going to receive those letters anymore, and that the land was
                  going to be cared for by someone who had plans for it.
                </p>
                <p className="whyweexist--p">
                  In the weeks that followed, something unexpected happened. As
                  friends and family inevitably heard that I’d finally dealt
                  with that pesky parcel, I got a call —{" "}
                  <em>
                    “Hey, I heard you sold that lot. How did you do it? I’ve
                    actually got one, too, and…”
                  </em>{" "}
                  It turned out I wasn’t the only one in my circle with an
                  “orphan” piece of land. A friend had a vacant lot from an old
                  investment that had gone nowhere despite former plans. Their
                  voice on the phone carried the same mix of embarrassment and
                  hope that I knew so well.{" "}
                  <strong>They were stuck, just like I was.</strong> That's when
                  it hit me:{" "}
                  <strong>
                    There must be thousands of people quietly wrestling with
                    this same problem,
                  </strong>{" "}
                  <em>not knowing where to turn.</em>{" "}
                  <strong>And no one was talking about it.</strong> I thought:{" "}
                  <em>
                    How many more are out there? How many feel this same mix of
                    guilt, inertia, and helplessness?
                  </em>{" "}
                  In fact, I found in many places{" "}
                  <a
                    href="https://www.landthink.com/pulse-most-oppose-higher-taxes-on-out-of-state-landowners/#:~:text=According%20to%20the%20August%20LANDTHINK,Americans%20are%20growing%20increasingly%20frustrated."
                    target="_blank"
                    rel="noreferrer"
                    title="Confirm statistics"
                  >
                    property taxes have been rising sharply, even surging by up
                    to 31%
                  </a>{" "}
                  in some areas between 2022 and 2023. It’s no wonder that
                  according to a nationwide poll by the Harris School of Public
                  Policy and AP-NORC Center{" "}
                  <a
                    href="https://www.landthink.com/pulse-most-oppose-higher-taxes-on-out-of-state-landowners/#:~:text=According%20to%20the%20August%20LANDTHINK,Americans%20are%20growing%20increasingly%20frustrated."
                    target="_blank"
                    rel="noreferrer"
                    title="Confirm statistics"
                  >
                    nearly two-thirds of Americans feel their property taxes are
                    too high.
                  </a>
                </p>
                <p className="whyweexist--p">
                  Those conversations and all my resulting research planted the
                  seed. I didn’t start this company because I dreamed about
                  being in <strong>real estate.</strong> I started it because I
                  Because I knew how good it felt to finally{" "}
                  <strong>let it go and be done</strong>—
                  <strong>not by losing your land in a tax sale,</strong> but by{" "}
                  <strong>choosing to release it with dignity.</strong> So, with
                  a deep breath, I began reaching out and offering to be that
                  helping hand for others in your and my same boat.
                </p>
                <span className="whyweexist--highlight">
                  "It felt like this knot in my stomach—finally had come
                  undone."
                </span>
              </section>

              <section
                className="whyweexist--content-section whyweexist__section--trust-understanding"
                data-title="A Bridge Built on Trust and Understanding"
              >
                <h2 className="whyweexist--h2">
                  A Bridge Built on Trust and Understanding
                </h2>
                <img
                  src="/covered-bridge-page-asset-shaded.jpg"
                  alt="Covered Bridge"
                />
                <p className="whyweexist--p">
                  When I chose the name "Covered Bridge Properties", it was
                  something intentional. I wanted to create a{" "}
                  <strong>safe passage</strong> for folks stuck with an unwanted
                  property, a trustworthy way to get from finding themselves
                  stuck under the weight of their problem to experiencing the
                  kind of relief waiting behind their own, similar solution. In
                  other words, we are a bridge from that{" "}
                  <strong>burden, to a state of peace of mind,</strong> which
                  you can also find the right reasons to utilize. And not just
                  any bridge—a covered bridge, meaning those on board are{" "}
                  <strong>protected and cared for</strong> along the journey,
                  not just shoved across and forgotten.
                </p>
                <p className="whyweexist--p">
                  That said, I can remember the (almost) very first call I’d
                  gotten from a potential client (besides my friend). I knew
                  right away it must have been hard for anyone in their shoes.{" "}
                  <strong>Her voice wavered</strong> as she described a piece of
                  land her family didn’t want. She was clearly tense and
                  expecting a sales pitch or some pressure—honestly, a lot of
                  people do, given how some real estate investors operate.
                  Instead, I just listened.{" "}
                  <strong>I could almost hear her surprise</strong> over the
                  phone as she realized{" "}
                  <strong>
                    I wasn’t interrupting or trying to hard-sell her.
                  </strong>{" "}
                  I was simply listening to her story.{" "}
                  <em>
                    That’s something I make sure every member of our small team
                    does as well:
                  </em>{" "}
                  <em>listen first,</em> talk later.
                </p>
                <p className="whyweexist--p">
                  So, when you and me find ourselves having these conversations
                  soon--
                  <strong>
                    know, as you are reading along, word by word, right now
                  </strong>
                  --it's not surprising when I hear a nervous laugh or a sigh on
                  the other end of the line, as the landowner begins to relax.
                  They’ll say, “I’m so embarrassed I let it go this long,” and
                  I’ll share that <strong>I’ve been in their shoes</strong>, so
                  I completely get it. There’s a moment when it stops feeling
                  like a business call and starts feeling like two people
                  figuring out a problem together. And that’s my favorite part.
                  We’ll talk through what they want, what they’re afraid of, and
                  whether selling the land makes sense for their situation.
                  Sometimes, after looking at all the facts, someone decides to
                  keep their land a while longer—and that’s okay!{" "}
                  <strong>
                    My job isn’t to convince every person who isn't ready to
                    sell right now; my job is to help them make the decision
                    that brings them the most peace at the end of the day.
                  </strong>{" "}
                  <strong>
                    No pressure, no gimmicks—just honest talk and a willingness
                    to provide help in the form of cash, fast.
                  </strong>
                </p>
              </section>

              <section className="whyweexist--content-section whyweexist--content-section-journey-forward">
                <h2 className="whyweexist--h2">Your Journey Forward</h2>
                <p className="whyweexist--p">
                  Now, I don’t know if anything in this story{" "}
                  <strong>resonates</strong> with you personally as you{" "}
                  <strong>continue thinking about it here</strong> and{" "}
                  <strong>perhaps in the days to come.</strong> Maybe you can
                  already <strong>see a bit of yourself in these lines</strong>
                  —feeling <em>frustrated</em>, or <em>guilty</em>, or just
                  plain <em>tired</em> of that{" "}
                  <strong>unwanted land looming in the background.</strong>{" "}
                  Maybe you’ve been{" "}
                  <strong>carrying this worry quietly,</strong> not sure who to
                  trust or where to start. What I do know is that you’re here
                  right now, reading this, and that tells me{" "}
                  <strong>you’re looking for a way forward,</strong> a way to
                  finally address{" "}
                  <em>this piece of your life that’s been in limbo.</em>
                </p>
                <span className="whyweexist--highlight">
                  "You already know deep down, you deserve that peace of mind."
                </span>
              </section>

              <section className="whyweexist--solution-section whyweexist__section--trustworthy-solution">
                <h2 className="whyweexist--h2">
                  A Calm and Trustworthy Solution Awaits You
                </h2>
                <p className="whyweexist--p whyweexist--solution-section-p1">
                  From day one, I knew that <strong>empathy</strong> and{" "}
                  <strong>honesty</strong> couldn’t stay reserved only for my
                  friends and family, but would have to form the{" "}
                  <strong>bedrock</strong> of Covered Bridge Properties, for
                  everyone's benefit. With that said, if you{" "}
                  <strong>decide to reach out to us,</strong> here’s what you
                  can expect:
                </p>
                <ul>
                  <li>
                    <strong>Plain Language:</strong> You’ll notice we talk like
                    normal people.{" "}
                    <em>No complicated real estate jargon to confuse you.</em>{" "}
                    We’ll explain your options in <strong>simple terms.</strong>{" "}
                    Selling vacant land—<em>especially from out of state</em>
                    —doesn’t have to be complicated, and{" "}
                    <strong>we make sure it isn’t.</strong>
                  </li>
                  <li>
                    <strong>Handling All the Hard Stuff:</strong> If you do
                    choose to sell your land to us, we strive to make it{" "}
                    <strong>
                      as easy as you can imagine needing it to be.
                    </strong>{" "}
                    Remember those tax notices and legal warnings? We’ve{" "}
                    <strong>seen them all before</strong> and know how to
                    address them. <strong>We’ll do the heavy lifting</strong> –
                    dealing with the county, sorting out any{" "}
                    <strong>liens</strong> or <strong>title issues,</strong>{" "}
                    covering the back taxes if we’ve agreed to – so you don’t
                    have to worry about those details. As one client told us,{" "}
                    <em>
                      “It was like a huge headache was just...{" "}
                      <strong>gone.</strong>”
                    </em>
                  </li>
                  <li>
                    <strong>
                      A Fast,{" "}
                      <span className="cash-green font-contrast">CA$H</span>{" "}
                      Payout:
                    </strong>{" "}
                    Unless otherwise specified, we provide you{" "}
                    <strong>rapid closing</strong>, and{" "}
                    <em>your own huge headache...</em>{" "}
                    <strong>
                      <em>gone</em>, in only two weeks or less.
                    </strong>
                  </li>
                </ul>
              </section>

              <section className="whyweexist--cta-section">
                <h2 className="whyweexist--h2">
                  Bridging to a Fresh Start – Let's Talk
                </h2>
                <p className="whyweexist--p">
                  At this point, you might be <em>starting to notice</em> a bit
                  of hope building quietly inside—that <strong>yes</strong>,
                  even if you were only able to recognize it <em>right now</em>
                  —there <strong>is a way out</strong> of the dilemma you’re in.
                  That unwanted parcel of land that’s been nagging at you?{" "}
                  <strong>
                    It doesn’t have to be this same burden forever.
                  </strong>{" "}
                  My personal pledge—and the promise behind{" "}
                  <strong>Covered Bridge Properties</strong>—is to offer you a{" "}
                  <em>calm, safe passage</em> from owning a piece of land you
                  don’t want... to finally letting it go{" "}
                  <strong>with dignity</strong>.
                </p>
                <p className="whyweexist--p">
                  Think of it like crossing a bridge: you’re{" "}
                  <em>leaving stress behind</em>, and{" "}
                  <strong>stepping into relief</strong> on the other side.
                </p>
                <p className="whyweexist--p">
                  And as you’re taking this in, you might even{" "}
                  <em>want to start imagining</em> what life would feel like{" "}
                  <strong>without that burden hanging around</strong>. Picture,
                  for a moment, <strong>no more letters piling up</strong>, no
                  more nagging reminders tugging at the back of your mind. It’s
                  a bit like <em>seeing sunlight peek through the trees</em> at
                  the end of a long, covered bridge—
                  <strong>
                    glimpsing the other side, where things feel easier, lighter…
                    finally resolved
                  </strong>
                  . Because by now you can <em>recognize and know:</em>{" "}
                  <strong>this is why we exist.</strong>
                </p>
                <p className="whyweexist--p">
                  You might also feel a{" "}
                  <em>hint of relief forming already now, too</em>—this sense of
                  being{" "}
                  <strong>
                    free from the responsibility and the uncertainty
                  </strong>
                  . You already know deep down, you deserve that peace of mind.
                  And whether you choose to work with me or not, I truly believe
                  you{" "}
                  <strong>deserve to step into that lighter feeling;</strong>{" "}
                  the way it feels having this finally resolved.
                </p>
                <p className="whyweexist--p">
                  So I want to extend a <em>warm invitation</em> to you: if any
                  of this feels familiar—even just a little—I invite you to{" "}
                  <strong>reach out now</strong>, and{" "}
                  <em>start a conversation</em>. Let’s talk about your land,
                  your concerns, and what you ultimately want. I’ll share what I
                  can do to help, and together we can figure out if it feels
                  like the <strong>right fit</strong>.
                </p>
                <p className="whyweexist--p">
                  At <strong>Covered Bridge Properties</strong>, we’re here to
                  provide <em>safe passage</em> when{" "}
                  <strong>you’re ready</strong>. Whenever that day is
                  here—whether it’s today, or sometime soon down the line
                  still—you’re welcome to <strong>pick up the phone</strong>,{" "}
                  <strong>or chat with our AI assistant</strong>,{" "}
                  <strong>
                    print and mail in our property evaluation form
                  </strong>{" "}
                  or <strong>shoot us an email</strong>. You will find either{" "}
                  <strong>comforting anonymity</strong> or a{" "}
                  <em>real person</em> on the other side—
                  <strong>ready to listen</strong>,{" "}
                  <strong>ready to understand</strong>, and{" "}
                  <strong>ready to help you cross</strong> to the resolution
                  you’ve been quietly hoping for in either case.
                </p>
                <p className="whyweexist--p">
                  Whatever you decide, thank you for taking the time to read my
                  story. I hope it gave you the{" "}
                  <em>first inkling of a sense</em> that someone{" "}
                  <strong>truly does care</strong> about helping you find a
                  solution—and quickly. You don’t have to{" "}
                  <strong>lose your land</strong> to a tax sale, or{" "}
                  <strong>keep draining money</strong> into a property you don’t
                  even use.
                </p>
                <p className="whyweexist--p">
                  There’s a <strong>better way</strong>,{" "}
                  <em>waiting just over the horizon</em>—and I’d be{" "}
                  <strong>honored to help you find it today</strong>. Completing
                  the screening process is the first step toward the end of this
                  chapter, and into the beginning of an opportunity for so much
                  good, but{" "}
                  <em>only if you decide to act now, before it's too late.</em>
                </p>
                <button
                  className="whyweexist--cta-button"
                  onClick={launchContactModal}
                >
                  Start <strong>Your</strong> Offer Screening Process
                  Immediately
                </button>
              </section>

              <footer className="whyweexist--footer">
                <p className>
                  — Joe Coviello, Managing Member
                </p>
              </footer>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Footer footerRef={footerRef} isVisible="false" />
          </div>
        </>
      )}
    </>
  );
};

export default WhyWeExist;
