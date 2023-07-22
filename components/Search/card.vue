<template>
    <div class="p-3 group transition-all duration-300 hover:scale-105 lg:hover:scale-110 hover:bg-background-500 text-foreground-display rounded-md bg-background-100 space-y-5 cursor-default">
        <div class="flex items-center justify-between">

            <div class="flex items-center gap-x-3">
                <img class="w-14 h-14 object-cover object-top rounded-md" src="https://static.wixstatic.com/media/7c19b3_80e2b2a4dea34f89ae87a7d6bb6e1398~mv2.jpg/v1/fill/w_525,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOTD_tour_flyer_front.jpg" alt="House of The Dragon">
                
                <div class="">
                    <p class="clamp-text">House of The Dragon</p>
                    <span class="text-xs text-foreground-body clamp-text">TV Show | 1 season</span>
                </div>
            </div>

            <Button intent="ghost" size="sm" custom-class="text-sm hidden group-hover:block">Open</Button>
        </div>

        <p class="text-sm text-foreground-body clamp-line">Set 200 years before the events of Game of Thrones, this epic series tells the story of House Targaryen.</p>

        <div class="w-full">
            <img class="aspect-[5/3] w-full object-cover object-top" src="https://static.wixstatic.com/media/7c19b3_80e2b2a4dea34f89ae87a7d6bb6e1398~mv2.jpg/v1/fill/w_525,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOTD_tour_flyer_front.jpg" alt="House of The Dragon">
        </div>
    </div>
</template>