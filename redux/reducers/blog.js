const initialState = [
    {
        id: 1,
        title: 'Sportsmanship & its Importance in our Everyday Lives',
        expect: 'Be a good sport. You may have heard these words before.  This phrase is not confined to only sports and athletes. Even outside the arena, …',
        describe: 'Be a good sport. You may have heard these words before.<br/>  This phrase is not confined to only sports and athletes. Even outside the arena, a commitment to fair play, displaying integrity and a general goodwill towards others forms the basis of good sportsmanship.People who are disciplined enough to have perspective, maintain poise and do what is best for everyone around them are ones we all look up to.<br/> These attributes tells us a lot about their character. And this allows them to react strongly & appropriately in a difficult situation.Sportsmanship is a choice and a way of life. When one consciously follows it, helps that individual understand the importance of teamwork and perseverance. This encourages them to do their best and boosts their confidence.However, it is true, that life is tough & the field is not level for everyone. We all experience setbacks, commit errors that could have been avoided, and in looking back we often shake our heads in disbelief at how we let ourselves or our “team” down. And that is where sportsmanship teaches us to win a very crucial battle – the one within. Because having a sporting spirit is not just about gaining an upper hand over the opponent, but also doing battle with the doubts within ourselves.<br/> More often than not, these are what hold us back. And if we can “be a good sport” to ourselves & shake away these thoughts, we will gain the confidence to overcome any obstacles. So let us all strive to move forward with a strong sporting mentality. Let’s try to be good sports in both the winning & losing situations & during our challenges, failures & successes.',
        img: '/Images/blog1.png'
    },
    {
        id: 2,
        title: 'How to Create a Healthy Work-Life Balance',
        expect: 'Attaining a good work-life balance while working from home can be challenging. We are constantly juggling our home and work responsibilities, which can lead to burnout …',
        describe: 'Attaining a good work-life balance while working from home can be challenging. We are constantly juggling our home and work responsibilities, which can lead to burnout. The routine will look different for each one of us and could change on a daily basis. Hence, it is important to create a balance and we hope our tips can help you achieve it. <br/> 1. Utilize your resources <br/> You will probably not have everything you need to do your job exactly as you would in the office. So, adapt and do the best you can with what you have available. Use tactics like creating a makeshift work space or using post it notes. A small mental shift can make a large difference. <br/> 2. Exercise <br/> Take out time to work out as it relieves your body of that pent-up energy and stress. You will feel happier and more productive as exercising pumps up your endorphins and lifts your mood. <br/> 3. Take lunch breaks <br/> While having complete access to your snacks sounds fun, this benefit becomes invalid if you’re not able to reach out to them! Ensure that you set aside time in your day for a proper lunch break. In case you find yourself skipping it, create a reminder on your phone & calendar',
        img: '/Images/blog2.jpg'
    },
    {
        id: 3,
        title: 'What We Learned In The Last Few Months',
        expect: 'What a ride it’s been, hasn’t it? There’s been chaos & upheaval. But we at ShopClues have also had something else: learnings …',
        describe: 'What a ride it’s been, hasn’t it? There’s been chaos & upheaval. But we at ShopClues have also had something else: learnings. We’ve learnt so much about spirit & what to do when your backs are against the wall. More importantly, we’ve learnt that these qualities lie in abundance within those who make us who we are – our merchants. Do you know what we can say with absolute certainty? That no matter what, we’ll continue to overcome hurdles & not give up! <br/> When Covid19 cases were at the initial stage, we had started spreading awareness & providing health essentials for everyone’s safety. As soon as the Lockdown was announced & we knew that delivery of essential items was call of the time our plans & strategies were updated instantly. Our entire team was united over a single fact – everyone should get what they want. <br/> This would not have been possible without the outstanding support of our incredible merchants. Their efforts to learn & dedication to extend support to the nation was the catalyst to this rapid change.<br/> First we identified Daily Need & Essential items. Then, the norms & regulations were explained to sellers who understood the requirements and changed their order of business.  Demand Insights were shared with sellers so that they could modify their product portfolio. We helped to move inventory of sellers who were unable to ship the orders due to lockdown, to our warehouses. As precautionary measure, regular sanitization of inventory & equipment, frequent temperature check & screening of everyone entering & leaving the warehouses became a norm.        Everyone worked together for one common cause – help the nation fight pandemic & do everything to ensure that India can #stayhomestaysafe.<br/> These efforts resulted in a rapid transformation. We were now providing immunity & health supplements, safety & hygiene needs, daily essentials, home necessities & more. FMCG brands & brands selling essential goods came on board. We kept on updating ourselves to match customers’ needs & provide greater satisfaction to our family. <br/>  As a part of this endeavor, we also brought something which everyone loves– Entertainment. ShopClues partnered with ShemarooMe to provide access & subscription to exclusive entertainment content. We continue to partner with multiple brands & bring essential services & products to our customer’s doorsteps.<br/>  It was a Herculean effort. It required the entire team to work together as one. And despite the distances, we stood united. From our delivery agents, to merchants and every single person in every team – we all understood the task at hand. It was critical – to keep India safer & happier. More importantly we learned that Real India is about never giving up. So, we at ShopClues continue to make sure that we bring happiness to your doorstep!',
        img: '/Images/blog3.jpg'
    }
]
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'blog':
            return state
        default:
            return state;
    }
};
export default blogReducer;