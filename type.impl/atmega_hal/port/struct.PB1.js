(function() {var type_impls = {
"arduino_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PinOps-for-PB1\" class=\"impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#impl-PinOps-for-PB1\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"arduino_hal/port/trait.PinOps.html\" title=\"trait arduino_hal::port::PinOps\">PinOps</a> for <a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Dynamic\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Dynamic\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arduino_hal/port/trait.PinOps.html#associatedtype.Dynamic\" class=\"associatedtype\">Dynamic</a> = <a class=\"struct\" href=\"atmega_hal/port/struct.Dynamic.html\" title=\"struct atmega_hal::port::Dynamic\">Dynamic</a></h4></section><section id=\"method.into_dynamic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.into_dynamic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.into_dynamic\" class=\"fn\">into_dynamic</a>(self) -&gt; &lt;<a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a> as <a class=\"trait\" href=\"arduino_hal/port/trait.PinOps.html\" title=\"trait arduino_hal::port::PinOps\">PinOps</a>&gt;::<a class=\"associatedtype\" href=\"arduino_hal/port/trait.PinOps.html#associatedtype.Dynamic\" title=\"type arduino_hal::port::PinOps::Dynamic\">Dynamic</a></h4></section><section id=\"method.out_set\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.out_set\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.out_set\" class=\"fn\">out_set</a>(&amp;mut self)</h4></section><section id=\"method.out_clear\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.out_clear\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.out_clear\" class=\"fn\">out_clear</a>(&amp;mut self)</h4></section><section id=\"method.out_toggle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.out_toggle\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.out_toggle\" class=\"fn\">out_toggle</a>(&amp;mut self)</h4></section><section id=\"method.out_get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.out_get\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.out_get\" class=\"fn\">out_get</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section><section id=\"method.in_get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.in_get\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.in_get\" class=\"fn\">in_get</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section><section id=\"method.make_output\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.make_output\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.make_output\" class=\"fn\">make_output</a>(&amp;mut self)</h4></section><section id=\"method.make_input\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/port.rs.html#4-10\">source</a><a href=\"#method.make_input\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"arduino_hal/port/trait.PinOps.html#tymethod.make_input\" class=\"fn\">make_input</a>(&amp;mut self, pull_up: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a>)</h4></section></div></details>","PinOps","arduino_hal::port::uno::D9"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PwmPinOps%3CTimer1Pwm%3E-for-PB1\" class=\"impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#impl-PwmPinOps%3CTimer1Pwm%3E-for-PB1\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html\" title=\"trait arduino_hal::simple_pwm::PwmPinOps\">PwmPinOps</a>&lt;<a class=\"struct\" href=\"arduino_hal/simple_pwm/struct.Timer1Pwm.html\" title=\"struct arduino_hal::simple_pwm::Timer1Pwm\">Timer1Pwm</a>&gt; for <a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Duty\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Duty\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#associatedtype.Duty\" class=\"associatedtype\">Duty</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a></h4></section><section id=\"method.enable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#method.enable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#tymethod.enable\" class=\"fn\">enable</a>(&amp;mut self)</h4></section><section id=\"method.disable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#method.disable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#tymethod.disable\" class=\"fn\">disable</a>(&amp;mut self)</h4></section><section id=\"method.get_duty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#method.get_duty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#tymethod.get_duty\" class=\"fn\">get_duty</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a> as <a class=\"trait\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html\" title=\"trait arduino_hal::simple_pwm::PwmPinOps\">PwmPinOps</a>&lt;<a class=\"struct\" href=\"arduino_hal/simple_pwm/struct.Timer1Pwm.html\" title=\"struct arduino_hal::simple_pwm::Timer1Pwm\">Timer1Pwm</a>&gt;&gt;::<a class=\"associatedtype\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#associatedtype.Duty\" title=\"type arduino_hal::simple_pwm::PwmPinOps::Duty\">Duty</a></h4></section><section id=\"method.get_max_duty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#method.get_max_duty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#tymethod.get_max_duty\" class=\"fn\">get_max_duty</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a> as <a class=\"trait\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html\" title=\"trait arduino_hal::simple_pwm::PwmPinOps\">PwmPinOps</a>&lt;<a class=\"struct\" href=\"arduino_hal/simple_pwm/struct.Timer1Pwm.html\" title=\"struct arduino_hal::simple_pwm::Timer1Pwm\">Timer1Pwm</a>&gt;&gt;::<a class=\"associatedtype\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#associatedtype.Duty\" title=\"type arduino_hal::simple_pwm::PwmPinOps::Duty\">Duty</a></h4></section><section id=\"method.set_duty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/atmega_hal/simple_pwm.rs.html#65-114\">source</a><a href=\"#method.set_duty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#tymethod.set_duty\" class=\"fn\">set_duty</a>(&amp;mut self, duty: &lt;<a class=\"struct\" href=\"atmega_hal/port/struct.PB1.html\" title=\"struct atmega_hal::port::PB1\">PB1</a> as <a class=\"trait\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html\" title=\"trait arduino_hal::simple_pwm::PwmPinOps\">PwmPinOps</a>&lt;<a class=\"struct\" href=\"arduino_hal/simple_pwm/struct.Timer1Pwm.html\" title=\"struct arduino_hal::simple_pwm::Timer1Pwm\">Timer1Pwm</a>&gt;&gt;::<a class=\"associatedtype\" href=\"arduino_hal/simple_pwm/trait.PwmPinOps.html#associatedtype.Duty\" title=\"type arduino_hal::simple_pwm::PwmPinOps::Duty\">Duty</a>)</h4></section></div></details>","PwmPinOps<Timer1Pwm>","arduino_hal::port::uno::D9"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()